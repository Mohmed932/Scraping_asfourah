import puppeteer from "puppeteer";

export const OpenBrowser = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true, 
      executablePath: "/usr/bin/chromium-browser", 
      args: [
        
        "--no-sandbox", 
        "--disable-gpu", 
      ], 
    });
    return browser;
  } catch (error) {
    console.error("❌ فشل فتح المتصفح:", error);
    return null;
  }
};
