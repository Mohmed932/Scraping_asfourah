import puppeteer from "puppeteer";
import { Sayidaty } from "./Scraping/Sayidaty";

export const Puppeteer = async () => {
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
    while (true) {
      await Sayidaty(browser);
    }
  } catch (error) {
    throw error;
  }
};
