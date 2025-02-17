import puppeteer from "puppeteer";

export const OpenBrowser = async () => {
  try {
    const browser = await puppeteer.launch({
      // headless: process.env.NODE_ENV === "production",
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
          ? '/usr/bin/chromium-browser'
          : puppeteer.executablePath(),
    });
    return browser;
  } catch (error) {
    console.error("❌ فشل فتح المتصفح:", error);
    return null; // إرجاع null بدلاً من إيقاف التطبيق
  }
};
