import { Sayidaty } from "./Scraping/Sayidaty.js";
import { Alqaheranews } from "./Scraping/Alqaheranews.js";
import { Aawsat } from "./Scraping/Aawsat.js";
import { Shorouknews } from "./Scraping/Shorouknews.js";
import { Elbalad } from "./Scraping/Elbalad.js";
import { OpenBrowser } from "./utiles/OpenBrowser.js";

export const PuppeteerScraping = async () => {
  try {
    const browser = await OpenBrowser();
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
