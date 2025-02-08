import { Abbreviation } from "../utiles/Abbreviation.js";
import { CleanImageUrl } from "../utiles/CleanImageUrl.js";
import { ParagraphFilterSayidaty } from "../utiles/ParagraphFilter.js";
import * as dotenv from "dotenv";
dotenv.config();

const links = [
  {
    category: "Art",
    name: "ثقافه وفن",
    link: "https://www.sayidaty.net/%D9%85%D8%B4%D8%A7%D9%87%D9%8A%D8%B1",
  },
  {
    category: "Health",
    name: "صحة",
    link: "https://www.sayidaty.net/%D8%B5%D8%AD%D8%A9-%D9%88%D8%B1%D8%B4%D8%A7%D9%82%D8%A9",
  },
  {
    category: "Health",
    name: "صحة",
    link: "https://www.sayidaty.net/%D8%AC%D9%85%D8%A7%D9%84",
  },
  {
    category: "Health",
    name: "صحة",
    link: "https://www.sayidaty.net/%D8%A3%D9%86%D8%A7%D9%82%D8%A9",
  },
  {
    category: "Health",
    name: "صحة",
    link: "https://www.sayidaty.net/%D8%B3%D9%8A%D8%AF%D8%AA%D9%8A-%D9%88%D8%B7%D9%81%D9%84%D9%83",
  },
  {
    category: "Health",
    name: "صحة",
    link: "https://www.sayidaty.net/%D8%A8%D9%84%D8%B3",
  },
  {
    category: "Miscellaneous",
    name: "منوعات",
    link: "https://www.sayidaty.net/%D9%84%D8%A7%D9%8A%D9%81-%D8%B3%D8%AA%D8%A7%D9%8A%D9%84",
  },
  {
    category: "Technology",
    name: "تكنولوجيا",
    link: "https://www.sayidaty.net/%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%A7%D9%84%D8%B0%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%85%D9%83%D9%8A%D9%86",
  },
];

const itemSelector = {
  linkNews: ".articles-list div .article-item div div a",
  title: "main .entry-article-wrapper div .entry-title h1",
  img: "main .entry-article-wrapper div .large-auto .pageWrapper .entry-article .entry-media .slider-item-img img",
  paragraphs:
    "main .entry-article-wrapper div .large-auto .pageWrapper .entry-content .field p",
  divs: "main .entry-article-wrapper div .large-auto .pageWrapper .entry-content .field div",
  h2: "main .entry-article-wrapper div .large-auto .pageWrapper .entry-content .field h2",
  filtertext: ParagraphFilterSayidaty,
  CleanUrlImage: CleanImageUrl,
  googleGeminiKey: process.env.GOOGLE_GEMINI_KEY_SAYIDATY,
};

export const Sayidaty = async (browser) => {
  await Abbreviation(browser, itemSelector, links);
};
