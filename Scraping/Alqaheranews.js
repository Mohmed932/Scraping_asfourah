import { Abbreviation } from "../utiles/Abbreviation.js";
import { CleanImageUrl } from "../utiles/CleanImageUrl.js";
import { ParagraphFilterAlqaheranews } from "../utiles/ParagraphFilter.js";
import * as dotenv from "dotenv";
dotenv.config();

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

const itemSelector = {
  linkNews: ".post-thumb .img-link",
  title: "main .single-content2 .entry-header h1",
  img: "main .single-content2 figure img",
  paragraphs: "main .single-content2 article .entry-main-content .htmlCode p",
  filtertext: ParagraphFilterAlqaheranews,
  CleanUrlImage: CleanImageUrl,
  googleGeminiKey: process.env.GOOGLE_GEMINI_KEY_ALQAHERANEWS,
};

export const Alqaheranews = async (browser) => {
  await Abbreviation(browser, itemSelector, links);
};
