import { Abbreviation } from "../utiles/abbreviation.js";

const links = [
  {
    category: "Art",
    name: "ثقافه وفن",
    link: "https://www.youm7.com/Section/%D8%AB%D9%82%D8%A7%D9%81%D8%A9/94/1",
  },
  {
    category: "Economy",
    name: "اقتصاد",
    link: "https://www.youm7.com/Section/%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF-%D9%88%D8%A8%D9%88%D8%B1%D8%B5%D8%A9/297/1",
  },
  {
    category: "Sports",
    name: "رياضه",
    link: "https://www.youm7.com/Section/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9/298/1",
  },
  {
    category: "World",
    name: "العالم",
    link: "https://www.youm7.com/Section/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1-%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9/286/1",
  },
  {
    category: "Technology",
    name: "تكنولوجيا",
    link: "https://www.youm7.com/Section/%D8%B9%D9%84%D9%88%D9%85-%D9%88-%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7/328/1",
  },
  {
    category: "Middle_East",
    name: "الشرق الاوسط",
    link: "https://www.youm7.com/Section/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9/88/1",
  },
  {
    category: "Policy",
    name: "سياسة",
    link: "https://www.youm7.com/Section/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9/319/1",
  },
  {
    category: "Health",
    name: "صحة",
    link: "https://www.youm7.com/Section/%D8%B5%D8%AD%D8%A9-%D9%88%D8%B7%D8%A8/245/1",
  },
  {
    category: "Miscellaneous",
    name: "منوعات",
    link: "https://www.youm7.com/Section/%D8%A7%D9%84%D9%85%D8%B1%D8%A3%D8%A9-%D9%88%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA/89/1",
  },
];

const itemSelector = {
  linkNews:"#paging .col-xs-12 a",
  title:"article section .container  article .articleHeader h1",
  img:"article section .container .right-Content article .img-cont img",
  paragraphs:"article section .container .right-Content article .articleCont #articleBody p",
  script:"article section .container article .articleCont #articleBody script",
  h2:"article section .container article .articleCont #articleBody h2",
  br:"article section .container article .articleCont #articleBody br",
  div:"article section .container article .articleCont #articleBody div",
};

export const Youm7 = async (browser) => {
 await Abbreviation(browser,itemSelector,links)
};
