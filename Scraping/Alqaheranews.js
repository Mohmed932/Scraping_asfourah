// import { news } from "../model/News.js";
// import { PostToFacebookPage } from "../SocialMedia/Facebook.js";
// import { indexing } from "../indexing/Google.js";
// import { submitToBing } from "../indexing/microsoft.js";
// import { DataAndTime } from "../utiles/data.js";

import { InsertDataToDb } from "../Curd/Inserttodb.js";

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

export const Alqaheranews = async (browser) => {
  if (browser.isConnected()) {
    for (let i = 0; i < links.length; i++) {
      let title, category, name, link, desc, img;
      const page = await browser.newPage();
      await page.goto(links[i].link, {
        waitUntil: "domcontentloaded",
        waitUntil: "load",
        timeout: 0,
      });
      const itemSelector = ".post-thumb .img-link";
      await page.waitForSelector(itemSelector, {
        waitUntil: "domcontentloaded",
        waitUntil: "load",
        timeout: 0,
      });
      link = await page.$eval(itemSelector, (i) => i.href);
      // check if this new in database or no
      await page.goto(link, {
        waitUntil: "domcontentloaded",
        waitUntil: "load",
        timeout: 0,
      });
      const itemSelectorTitle = "main .single-content2 .entry-header h1";
      await page.waitForSelector(itemSelectorTitle, {
        waitUntil: "domcontentloaded",
        waitUntil: "load",
        timeout: 0,
      });
      title = await page.$eval(itemSelectorTitle, (i) => i.textContent.trim());
      const itemSelectorImage = "main .single-content2 figure img";
      await page.waitForSelector(itemSelectorImage, {
        waitUntil: "domcontentloaded",
        waitUntil: "load",
        timeout: 0,
      });
      img = await page.$eval(itemSelectorImage, (i) => i.src);
      category = links[i].category;
      name = links[i].name;
      const itemSelectorParagph =
        "main .single-content2 article .entry-main-content .htmlCode p";
      desc = await page.$$eval(itemSelectorParagph, (elements) =>
        elements.map((el) => el.textContent.trim())
      );
      const data = { title, img, link, name, category, desc }
      await InsertDataToDb(data);
    }
  }
};
