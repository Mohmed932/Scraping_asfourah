import puppeteer from "puppeteer";

export const OpenBrowser = async () => {
  try {
    const browser = await puppeteer.launch({
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
    return browser;
  } catch (error) {
    throw error;
  }
};
