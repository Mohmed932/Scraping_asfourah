import { Sayidaty } from "./Scraping/Sayidaty.js";
import { Alqaheranews } from "./Scraping/Alqaheranews.js";
import { Aawsat } from "./Scraping/Aawsat.js";
import { Shorouknews } from "./Scraping/Shorouknews.js";
import { Elbalad } from "./Scraping/Elbalad.js";
import { OpenBrowser } from "./utiles/OpenBrowser.js";


const ScrapingNews = async(browser) => {
  await Elbalad(browser);
  await Shorouknews(browser);
  await Sayidaty(browser);
  await Alqaheranews(browser);
  await Aawsat(browser);
}


export const PuppeteerScraping = async () => {
  try {
    const browser = await OpenBrowser();
    await ScrapingNews(browser);
    setInterval(async () => {
      await ScrapingNews(browser);
    }, 600000);
  } catch (error) {
    throw error;
  }
};
