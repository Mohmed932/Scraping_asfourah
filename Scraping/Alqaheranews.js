// import { news } from "../model/News.js";
// import { PostToFacebookPage } from "../SocialMedia/Facebook.js";
// import { indexing } from "../indexing/Google.js";
// import { submitToBing } from "../indexing/microsoft.js";

import { InsertDataToDb } from "../Curd/Inserttodb.js";
import { rewriteScence } from "../utiles/Rewrite.js";

const links = [
  {
    category: "Art",
    name: "ثقافه وفن",
    link: "https://alqaheranews.net/category/%D9%81%D9%86%D9%88%D9%86-%D8%AB%D9%82%D8%A7%D9%81%D8%A9",
  },
  {
    category: "Economy",
    name: "اقتصاد",
    link: "https://alqaheranews.net/category/%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF",
  },
  {
    category: "Sports",
    name: "رياضه",
    link: "https://alqaheranews.net/category/%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9",
  },
  {
    category: "World",
    name: "العالم",
    link: "https://alqaheranews.net/category/%D8%AD%D9%88%D9%84-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85",
  },
  {
    category: "Technology",
    name: "تكنولوجيا",
    link: "https://alqaheranews.net/category/%D8%A7%D9%84%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7",
  },
  {
    category: "Middle_East",
    name: "الشرق الاوسط",
    link: "https://alqaheranews.net/category/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7",
  },
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const Alqaheranews = async (browser) => {
  if (browser.isConnected()) {
    for (let i = 0; i < links.length; i++) {
      try {
        // الانتظار لمدة دقيقة قبل البدء في معالجة الرابط الحالي
        await delay(60000);

        const { category, name, link: categoryLink } = links[i];
        const page = await browser.newPage();
        await page.goto(categoryLink, { waitUntil: "load", timeout: 0 });

        const itemSelector = ".post-thumb .img-link";
        await page.waitForSelector(itemSelector, { timeout: 5000 });
        const link = await page.$eval(itemSelector, (i) => i.href);

        // الانتقال للرابط
        await page.goto(link, { waitUntil: "load", timeout: 0 });

        // استخراج البيانات
        const title = await page.$eval(
          "main .single-content2 .entry-header h1",
          (i) => i.textContent.trim()
        );
        const img = await page.$eval(
          "main .single-content2 figure img",
          (i) => i.src
        );
        const paragraphs = await page.$$eval(
          "main .single-content2 article .entry-main-content .htmlCode p",
          (elements) => elements.map((el) => el.textContent.trim())
        );

        const desc = await Promise.all(
          paragraphs.map(async (paragraph) => await rewriteScence(paragraph))
        );

        const data = {
          title: await rewriteScence(title),
          img,
          link,
          name,
          category,
          desc,
        };
        await InsertDataToDb(data);
        await page.close();
      } catch (error) {
        console.error(`Error processing link ${links[i].link}:`, error);
      }
    }
  }
};
