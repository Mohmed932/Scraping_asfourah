// import { PostToFacebookPage } from "../SocialMedia/Facebook.js";
// import { indexing } from "../indexing/Google.js";
// import { submitToBing } from "../indexing/microsoft.js";

import { InsertDataToDb } from "../Curd/Inserttodb.js";
import { News } from "../model/News.js";
import { rewriteScence } from "./Rewrite.js";

// قائمة المتصفحات
const userAgents = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
  "Mozilla/5.0 (iPad; CPU OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
];

const getRandomUserAgent = () =>
  userAgents[Math.floor(Math.random() * userAgents.length)];

const openPage = async (
  page,
  url,
  viewport = { width: 1600, height: 950, deviceScaleFactor: 1 }
) => {
  try {
    await page.setViewport(viewport);
    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 0,
    });
  } catch (error) {
    console.error("Error opening page:", error);
    throw error; // إعادة رمي الخطأ لتتم معالجته في مكان آخر
  }
};

const processLink = async (page, link, itemSelector, name, category) => {
  try {
    await page.setUserAgent(getRandomUserAgent());
    await openPage(page, link);

    const title = await page.$eval(itemSelector.title, (i) =>
      i.textContent.trim()
    );
    const img = await itemSelector.CleanUrlImage(page, itemSelector);
    const paragraphs = await itemSelector.filtertext(page, itemSelector);

    if (title && img && paragraphs[0]) {
      paragraphs[0] = await rewriteScence(
        paragraphs[0],
        itemSelector.googleGeminiKey
      );
      const data = {
        title: await rewriteScence(title, itemSelector.googleGeminiKey),
        img,
        link,
        name,
        category,
        desc: paragraphs,
      };
      await InsertDataToDb(data);
    }
  } catch (error) {
    console.error("Error processing link:", error);
  }
};

const processCategoryLinks = async (
  page,
  itemSelector,
  categoryLink,
  name,
  category
) => {
  try {
    await openPage(page, categoryLink);
    await page.waitForSelector(itemSelector.linkNews, {
      waitUntil: "domcontentloaded",
      timeout: 0,
    });

    const link = await page.$eval(itemSelector.linkNews, (i) => i.href);
    const checklinkindb = await News.exists({ link });
    if (!checklinkindb) {
      await processLink(page, link, itemSelector, name, category);
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

export const Abbreviation = async (browser, itemSelector, links) => {
  if (!browser.isConnected()) return;
  for (let i = 0; i < links.length; i++) {
    const { category, name, link: categoryLink } = links[i];
    const page = await browser.newPage();
    try {
      await processCategoryLinks(
        page,
        itemSelector,
        categoryLink,
        name,
        category
      );
    } catch (error) {
      console.error(
        `Error processing link ${categoryLink} at index ${i}:`,
        error
      );
      throw error;
    } finally {
      await page.close();
    }
  }
};
