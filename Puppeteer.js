import puppeteer from "puppeteer";
import { Sayidaty } from "./Scraping/Sayidaty.js";
import { Alqaheranews } from "./Scraping/Alqaheranews.js";
import { Ahram } from "./Scraping/Ahram.js";
import { Aawsat } from "./Scraping/Aawsat.js";
import { Alarabiya } from "./Scraping/Alarabiya.js";

export const PuppeteerScraping = async () => {
  let browser = null;
  try {
    browser = await puppeteer.launch({
      // headless: process.env.NODE_ENV === "production" ? true : false,
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
    await Alarabiya(browser);
    await Sayidaty(browser);
    await Alqaheranews(browser);
    await Aawsat(browser);
    await Ahram(browser);
    setInterval(async () => {
      await Alarabiya(browser);
      await Sayidaty(browser);
      await Alqaheranews(browser);
      await Aawsat(browser);
      await Ahram(browser);
    }, 600000);
  } catch (error) {
    throw error;
  }
};
