import { Abbreviation } from "../utiles/Abbreviation.js";
import { CleanImageUrl } from "../utiles/CleanImageUrl.js";
import { ParagraphFilterSkynewsArabia } from "../utiles/ParagraphFilter.js";
import * as dotenv from "dotenv";
dotenv.config();

const links = [
  {
    category: "Sports",
    name: "رياضه",
    link: "https://www.skynewsarabia.com/sport",
  },
  {
    category: "World",
    name: "العالم",
    link: "https://www.skynewsarabia.com/world",
  },
  {
    category: "Technology",
    name: "تكنولوجيا",
    link: "https://www.skynewsarabia.com/technology",
  },
  {
    category: "Miscellaneous",
    name: "منوعات",
    link: "https://www.skynewsarabia.com/varieties",
  },
  {
    category: "Middle_East",
    name: "الشرق الاوسط",
    link: "https://www.skynewsarabia.com/middle-east",
  },
  {
    category: "Middle_East",
    name: "الشرق الاوسط",
    link: "https://www.skynewsarabia.com/middle-east/northafrica",
  },
];

const itemSelector = {
  linkNews:
    "section .body_content .comp_1 .comp_1_inner_cont .comp_1_cont .comp_1_content_container .comp_1_item a",
  title:
    "section .article_detail_page .article_content_rev_cont .article_rev_sec_cont .sna_content_heading span",
  img: "section .article_detail_page #first-article-middle .article-media .aspect_content img",
  paragraphs:
    "section .article_detail_page #first-article-middle .article-content .article-body p",
  divs: "section .article_detail_page #first-article-middle .article-content .article-body div",
  sna: "section .article_detail_page #first-article-middle .article-content .article-body sna",
  filtertext: ParagraphFilterSkynewsArabia,
  CleanUrlImage: CleanImageUrl,
  googleGeminiKey: process.env.GOOGLE_GEMINI_KEY_SKYNEWSARABIA,
};

export const SkynewsArabia = async (browser) => {
  await Abbreviation(browser, itemSelector, links);
};
