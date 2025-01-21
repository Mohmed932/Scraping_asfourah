import { Abbreviation } from "../utiles/abbreviation.js";

const links = [
  {
    category: "Art",
    name: "ثقافه وفن",
    link: "https://www.almasryalyoum.com/section/index/6",
  },
  {
    category: "Economy",
    name: "اقتصاد",
    link: "https://www.almasryalyoum.com/section/index/4",
  },
  {
    category: "Sports",
    name: "رياضه",
    link: "https://www.almasryalyoum.com/section/index/8",
  },
  {
    category: "World",
    name: "العالم",
    link: "https://www.almasryalyoum.com/section/index/2",
  },
  {
    category: "Technology",
    name: "تكنولوجيا",
    link: "https://www.almasryalyoum.com/section/index/9",
  },
  {
    category: "Policy",
    name: "سياسة",
    link: "https://www.almasryalyoum.com/section/index/78",
  },
  {
    category: "Health",
    name: "صحة",
    link: "https://www.almasryalyoum.com/section/index/142",
  },
  {
    category: "Miscellaneous",
    name: "منوعات",
    link: "https://www.almasryalyoum.com/section/index/12",
  },
];

const itemSelector = {
  linkNews:".last_news ul li a",
  title:".article .tit_2",
  img:".article .articleimg img",
  paragraphs:".article #NewsStory p",
  script:".article #NewsStory script",
  h2:".article #NewsStory h2",
  br:".article #NewsStory br",
  div:".article #NewsStory div",
};

export const Almasryalyoum = async (browser) => {
 await Abbreviation(browser,itemSelector,links)
};
