// import { PostToFacebookPage } from "../SocialMedia/Facebook.js";
// import { indexing } from "../indexing/Google.js";
// import { submitToBing } from "../indexing/microsoft.js";

import { InsertDataToDb } from "../Curd/Inserttodb.js";
import { News } from "../model/News.js";
import { rewriteScence } from "./Rewrite.js";

const userAgents = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
  "Mozilla/5.0 (iPad; CPU OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
];

const getRandomUserAgent = () => {
  return userAgents[Math.floor(Math.random() * userAgents.length)];
};

export const Abbreviation = async (browser, itemSelector, links) => {
  if (browser.isConnected()) {
    for (let i = 0; i < links.length; i++) {
      const { category, name, link: categoryLink } = links[i];
      const page = await browser.newPage();

      try {
        await page.setViewport({
          width: 1280,
          height: 800,
          deviceScaleFactor: 1,
        });

        // تعيين User-Agent عشوائي
        const userAgent = getRandomUserAgent();
        await page.setUserAgent(userAgent);

        // الانتقال إلى رابط التصنيف
        await page.goto(categoryLink, {
          waitUntil: "domcontentloaded",
          waitUntil: "load",
          timeout: 0,
        });

        // انتظار العنصر المطلوب
        await page.waitForSelector(itemSelector.linkNews, {
          waitUntil: "domcontentloaded",
          waitUntil: "load",
          timeout: 0,
        });
        const link = await page.$eval(itemSelector.linkNews, (i) => i.href);

        // التحقق من وجود الرابط في قاعدة البيانات
        const checklinkindb = await News.findOne({ link });
        if (!checklinkindb) {
          // تعيين User-Agent عشوائي جديد
          const newUserAgent = getRandomUserAgent();
          await page.setUserAgent(newUserAgent);

          // الانتقال إلى الرابط
          await page.goto(link, {
            waitUntil: "domcontentloaded",
            waitUntil: "load",
            timeout: 0,
          });
          const title = await page.$eval(itemSelector.title, (i) =>
            i.textContent.trim()
          );
          const img = await page.$eval(itemSelector.img, (i) => i.src);
          const paragraphs = await itemSelector.filtertext(page, itemSelector);
          if (paragraphs[0]) {
            paragraphs[0] = await rewriteScence(paragraphs[0]);
            const data = {
              title: await rewriteScence(title),
              img,
              link,
              name,
              category,
              desc: paragraphs,
            };
            await InsertDataToDb(data);
            await page.close();
          }
          await page.close();
        }
        await page.close();
      } catch (error) {
        console.error(
          `Error processing link ${links[i].link} at index ${i}:`,
          error
        );
        await page.close();
      } finally {
        if (!page.isClosed()) await page.close();
      }
    }
  }
};
