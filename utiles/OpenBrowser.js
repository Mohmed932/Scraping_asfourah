import puppeteer from "puppeteer";

export const OpenBrowser = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
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
    console.error("❌ فشل فتح المتصفح:", error);
    return null; 
  }
};
