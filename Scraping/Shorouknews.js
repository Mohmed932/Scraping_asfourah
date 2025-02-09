import { Abbreviation } from "../utiles/Abbreviation.js";
import { CleanImageUrl } from "../utiles/CleanImageUrl.js";
import { ParagraphFilterShorouknews } from "../utiles/ParagraphFilter.js";
import * as dotenv from "dotenv";
dotenv.config();

const links = [
  {
    category: "Art",
    name: "ثقافه وفن",
    link: "https://www.shorouknews.com/art",
  },
  {
    category: "Economy",
    name: "اقتصاد",
    link: "https://www.shorouknews.com/Economy",
  },
  {
    category: "Sports",
    name: "رياضه",
    link: "https://www.shorouknews.com/sports",
  },
  {
    category: "World",
    name: "العالم",
    link: "https://www.shorouknews.com/Politics/world",
  },
  {
    category: "Health",
    name: "صحة",
    link: "https://www.shorouknews.com/ladies",
  },
  {
    category: "Health",
    name: "صحة",
    link: "https://www.shorouknews.com/variety/health",
  },
  {
    category: "Miscellaneous",
    name: "منوعات",
    link: "https://www.shorouknews.com/variety/Youth-Edu",
  },
  {
    category: "Miscellaneous",
    name: "منوعات",
    link: "https://www.shorouknews.com/variety/sciences",
  },
  {
    category: "Technology",
    name: "تكنولوجيا",
    link: "https://www.shorouknews.com/variety/Internet-Comm",
  },
  {
    category: "Middle_East",
    name: "الشرق الاوسط",
    link: "https://www.shorouknews.com/Politics/arab",
  },
];

const itemSelector = {
  linkNews: ".listingList .listing li .text a",
  title: ".container .rightArea .innerNews .topDetails h1",
  img: ".container .rightArea .innerNews #Body_Body_DivImage img",
  paragraphs: ".container .rightArea .innerNews .eventContent p",
  style: ".container .rightArea .innerNews .eventContent style",
  filtertext: ParagraphFilterShorouknews,
  CleanUrlImage: CleanImageUrl,
  googleGeminiKey: process.env.GOOGLE_GEMINI_KEY_ALQAHERANEWS,
};

export const Shorouknews = async (browser) => {
  await Abbreviation(browser, itemSelector, links);
};
