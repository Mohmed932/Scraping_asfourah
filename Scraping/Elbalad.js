import { Abbreviation } from "../utiles/Abbreviation.js";
import { CleanImageUrl } from "../utiles/CleanImageUrl.js";
import { ParagraphFilterElbalad } from "../utiles/ParagraphFilter.js";
import * as dotenv from "dotenv";
dotenv.config();

const links = [
  // {
  //   category: "Art",
  //   name: "ثقافه وفن",
  //   link: "https://www.elbalad.news/category/8",
  // },
  // {
  //   category: "Economy",
  //   name: "اقتصاد",
  //   link: "https://www.elbalad.news/category/6",
  // },
  {
    category: "Sports",
    name: "رياضه",
    link: "https://www.elbalad.news/category/5",
  },
  {
    category: "World",
    name: "العالم",
    link: "https://www.elbalad.news/category/9",
  },
  {
    category: "Technology",
    name: "تكنولوجيا",
    link: "https://www.elbalad.news/category/17",
  },
  {
    category: "Miscellaneous",
    name: "منوعات",
    link: "https://www.elbalad.news/category/10",
  },
  {
    category: "Miscellaneous",
    name: "منوعات",
    link: "https://www.elbalad.news/category/4",
  },
];

const itemSelector = {
  linkNews: ".news-list .item-li a",
  title: "article h1",
  img: "article .mainImg figure img",
  paragraphs: "article .paragraph-list p",
  divs: "article .paragraph-list div",
  h2: "article .paragraph-list h2",
  filtertext: ParagraphFilterElbalad,
  CleanUrlImage: CleanImageUrl,
  googleGeminiKey: process.env.GOOGLE_GEMINI_KEY_ELBALAD,
};

export const Elbalad = async (browser) => {
  await Abbreviation(browser, itemSelector, links);
};
