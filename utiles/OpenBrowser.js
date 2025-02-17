import puppeteer from "puppeteer";

export const OpenBrowser = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      executablePath: "/usr/bin/chromium-browser", 
     args: [
        "--disable-setuid-sandbox",
        "--no-sandbox",
        "--disable-gpu",
        "--single-process",
        "--disable-dev-shm-usage",
      ],
    });
    return browser;
  } catch (error) {
    console.error("❌ فشل فتح المتصفح:", error);
    return null;
  }
};
