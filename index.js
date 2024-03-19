import express from "express";
import { connect } from "mongoose";
import puppeteer from "puppeteer";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import * as dotenv from "dotenv";
dotenv.config();
import { Alqaheranews } from "./Scraping/Alqaheranews.js";

const uri = process.env.MONGODB_URL;
const port = process.env.PORT || "5000";

const app = express();

// midelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(compression());

// routes
app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

// puppeteer scraping
(async () => {
  try {
    const browser = await puppeteer.launch({
      args: [
        "--disable-setuid-sandbox",
        "--no-sandbox",
        "--single-process",
        "--no-zygote",
      ],
      headless: "new",
      executablePath:
        process.env.NODE_ENV === "production"
          ? process.env.PUPPETEER_EXECUTABLE_PATH
          : puppeteer.executablePath(),
    });

    const page = await browser.newPage();
    await page.goto("https://sadaelbalad-quj0.onrender.com", {
      waitUntil: "domcontentloaded",
    });

    while (true) {
      await Alqaheranews(browser);

      // Close the current page and open a new one
      await page.close();
      const newPage = await browser.newPage();
      await page.goto("https://alqaheranews-tq7i.onrender.com", {
        waitUntil: "domcontentloaded",
      });
      page = newPage; // Update the page reference to the new page
    }
  } catch (error) {
    if (error) throw error;
    console.error("Error in Puppeteer scraping:", error);
  }
})();

app.use("*", (req, res) => {
  res.status(404).json("this page not found");
});

// conect to database then listen to server
connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, async (req, res) => {
      console.log("conected");
    })
  )
  .catch(() => console.log("not conected"));
