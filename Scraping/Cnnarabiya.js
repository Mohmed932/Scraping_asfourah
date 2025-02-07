import { Abbreviation } from "../utiles/Abbreviation.js";


const links = [
  {
    category: "Art",
    name: "ثقافه وفن",
    link: "https://arabic.cnn.com/style",
  },
  {
    category: "Economy",
    name: "اقتصاد",
    link: "https://arabic.cnn.com/specials/marketplace-middle-east",
  },
  {
    category: "Sports",
    name: "رياضه",
    link: "https://arabic.cnn.com/sport",
  },
  {
    category: "World",
    name: "العالم",
    link: "https://arabic.cnn.com/world",
  },
  {
    category: "Miscellaneous",
    name: "منوعات",
    link: "https://arabic.cnn.com/entertainment",
  },
  {
    category: "Health",
    name: "صحة",
    link: "https://arabic.cnn.com/science-and-health",
  },
  {
    category: "Middle_East",
    name: "الشرق الاوسط",
    link: "https://arabic.cnn.com/middle-east",
  },
];

const itemSelector = {
  linkNews:".article-item-info .article-item-title h2 a",
  title:".entry-title h1",
  img:".entry-media .img-field img",
  paragraphs:".printable-area article .entry-content p",
};

export const Cnnarabiya = async (browser) => {
 await Abbreviation(browser,itemSelector,links)
};
