import { Abbreviation } from "../utiles/Abbreviation.js";
import { CleanImageUrl } from "../utiles/CleanImageUrl.js";
import { ParagraphFilterAawsat } from "../utiles/ParagraphFilter.js";
import * as dotenv from "dotenv";
dotenv.config();

const links = [
  {
    category: "Art",
    name: "ثقافه وفن",
    link: "https://aawsat.com/%D8%AB%D9%82%D8%A7%D9%81%D8%A9-%D9%88%D9%81%D9%86%D9%88%D9%86",
  },
  {
    category: "Economy",
    name: "اقتصاد",
    link: "https://aawsat.com/%D8%A7%D9%84%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF",
  },
  {
    category: "Sports",
    name: "رياضه",
    link: "https://aawsat.com/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9",
  },
  {
    category: "World",
    name: "العالم",
    link: "https://aawsat.com/%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85",
  },
  {
    category: "Miscellaneous",
    name: "منوعات",
    link: "https://alqaheranews.net/category/%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA",
  },
  {
    category: "Technology",
    name: "تكنولوجيا",
    link: "https://aawsat.com/%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7",
  },
  {
    category: "Health",
    name: "صحة",
    link: "https://aawsat.com/%D8%B5%D8%AD%D8%A9-%D9%88%D8%B9%D9%84%D9%88%D9%85",
  },
  //   {
  //     category: "Policy",
  //     name: "سياسة",
  //     link: "https://www.youm7.com/Section/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9/319/1",
  //   },
  {
    category: "Middle_East",
    name: "الشرق الاوسط",
    link: "https://aawsat.com/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7",
  },
];

const itemSelector = {
  linkNews: ".article-item-info .article-item-title h2 a",
  title: ".entry-title h1",
  img: ".entry-media .img-field img",
  paragraphs: ".printable-area article .entry-content p",
  blockquote: ".printable-area article .entry-content blockquote",
  filtertext: ParagraphFilterAawsat,
  CleanUrlImage: CleanImageUrl,
  googleGeminiKey: process.env.GOOGLE_GEMINI_KEY_AAESAT,
};

export const Aawsat = async (browser) => {
  await Abbreviation(browser, itemSelector, links);
};
