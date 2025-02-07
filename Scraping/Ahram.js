import { Abbreviation } from "../utiles/Abbreviation.js";


const links = [
  {
    category: "Art",
    name: "ثقافه وفن",
    link: "https://gate.ahram.org.eg/Portal/25/%D8%AB%D9%82%D8%A7%D9%81%D8%A9-%D9%88%D9%81%D9%86%D9%88%D9%86.aspx",
  },
  {
    category: "Economy",
    name: "اقتصاد",
    link: "https://gate.ahram.org.eg/Portal/14/%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF.aspx",
  },
  {
    category: "Sports",
    name: "رياضه",
    link: "https://gate.ahram.org.eg/Portal/44/%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9.aspx",
  },
  {
    category: "World",
    name: "العالم",
    link: "https://gate.ahram.org.eg/Portal/54/%D8%B9%D8%B1%D8%A8-%D9%88%D8%B9%D8%A7%D9%84%D9%85.aspx",
  },
  {
    category: "Miscellaneous",
    name: "منوعات",
    link: "https://gate.ahram.org.eg/Portal/34/%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA.aspx",
  },
  {
    category: "Technology",
    name: "تكنولوجيا",
    link: "https://gate.ahram.org.eg/Portal/66/%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%D8%A7%D8%AA-%D9%88%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7.aspx",
  },
  {
    category: "Health",
    name: "صحة",
    link: "https://aawsat.com/%D8%B5%D8%AD%D8%A9-%D9%88%D8%B9%D9%84%D9%88%D9%85",
  },
];

const itemSelector = {
  linkNews:"#outer #ContentPlaceHolder1_dlNewsContentUrgent_divOuterNews_0 div div a",
  title:"#ContentPlaceHolder1_divTitle",
  img:"#ContentPlaceHolder1_divMainImage img",
  paragraphs:"#ContentPlaceHolder1_divContent p",
};

export const Ahram = async (browser) => {
 await Abbreviation(browser,itemSelector,links)
};
