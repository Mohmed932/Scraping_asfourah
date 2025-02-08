import { Abbreviation } from "../utiles/Abbreviation.js";
import { CleanImageUrl } from "../utiles/CleanImageUrl.js";
import { ParagraphFilterAlarabiya } from "../utiles/ParagraphFilter.js";
import * as dotenv from "dotenv";
dotenv.config();

const links = [
  {
    category: "Art",
    name: "ثقافه وفن",
    link: "https://www.alarabiya.net/culture-and-art",
  },
  {
    category: "Economy",
    name: "اقتصاد",
    link: "https://www.alarabiya.net/aswaq/economy",
  },
  {
    category: "Economy",
    name: "اقتصاد",
    link: "https://www.alarabiya.net/aswaq/realestate",
  },
  {
    category: "Economy",
    name: "اقتصاد",
    link: "https://www.alarabiya.net/aswaq/oil-and-gas",
  },
  {
    category: "Economy",
    name: "اقتصاد",
    link: "https://www.alarabiya.net/aswaq/companies",
  },
  {
    category: "Sports",
    name: "رياضه",
    link: "https://www.alarabiya.net/sport",
  },
  {
    category: "World",
    name: "العالم",
    link: "https://www.alarabiya.net/latest-news",
  },
  {
    category: "Health",
    name: "صحة",
    link: "https://www.alarabiya.net/medicine-and-health",
  },
  {
    category: "Miscellaneous",
    name: "منوعات",
    link: "https://www.alarabiya.net/science",
  },
  {
    category: "Miscellaneous",
    name: "منوعات",
    link: "https://www.alarabiya.net/fashion-beauty",
  },
  {
    category: "Technology",
    name: "تكنولوجيا",
    link: "https://www.alarabiya.net/technology",
  },
  {
    category: "Middle_East",
    name: "الشرق الاوسط",
    link: "https://www.alarabiya.net/arab-and-world",
  },
];

const itemSelector = {
  linkNews: ".globalArea section div div a",
  title:
    ".articles-container section .page-content div .headingInfo .headingInfo_headers h1",
  img: ".articles-container section .page-content div .article-hero-img picture img",
  paragraphs: ".articles-container section #body-text p",
  divs: ".articles-container section #body-text div",
  filtertext: ParagraphFilterAlarabiya,
  CleanUrlImage: CleanImageUrl,
  googleGeminiKey: process.env.GOOGLE_GEMINI_KEY_ALQAHERANEWS,
};

export const Alarabiya = async (browser) => {
  await Abbreviation(browser, itemSelector, links);
};
