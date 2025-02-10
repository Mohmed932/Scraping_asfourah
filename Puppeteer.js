import puppeteer from "puppeteer";
import { Sayidaty } from "./Scraping/Sayidaty.js";
import { Alqaheranews } from "./Scraping/Alqaheranews.js";
import { Aawsat } from "./Scraping/Aawsat.js";
import { Shorouknews } from "./Scraping/Shorouknews.js";
import { Elbalad } from "./Scraping/Elbalad.js";

export const PuppeteerScraping = async () => {
  let browser = null;
  try {
    browser = await puppeteer.launch({
      headless: process.env.NODE_ENV === "production" ? true : false,
      args: [
        "--disable-setuid-sandbox",
        "--no-sandbox",
        "--single-process",
        "--no-zygote",
        "--start-maximized",
        "--disable-infobars",
      ],
      executablePath:
        process.env.NODE_ENV === "production"
          ? process.env.PUPPETEER_EXECUTABLE_PATH
          : puppeteer.executablePath(),
    });
    await Elbalad(browser);
    await Shorouknews(browser);
    await Sayidaty(browser);
    await Alqaheranews(browser);
    await Aawsat(browser);
    setInterval(async () => {
      await Elbalad(browser);
      await Shorouknews(browser);
      await Sayidaty(browser);
      await Alqaheranews(browser);
      await Aawsat(browser);
    }, 600000);
  } catch (error) {
    throw error;
  }
};
