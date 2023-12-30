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
app.use(
  cors({
    origin: "https://awalbawl.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(compression());

// routes
app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

// puppeteer scraping
(async () => {
  let browser = null;
  try {
    browser = await puppeteer.launch({
      args: [
        "--disable-setuid-sandbox",
        "--no-sandbox",
        "--single-process",
        "--no-zygote",
      ],
      executablePath:
        process.env.NODE_ENV === "production"
          ? process.env.PUPPETEER_EXECUTABLE_PATH
          : puppeteer.executablePath(),
    });
    while (true) {
      await Alqaheranews(browser);
      const page = await browser.newPage();
      await page.goto("https://alqaheranews-luay.onrender.com", {
        waitUntil: "domcontentloaded",
        waitUntil: "load",
      });
      await page.close();
    }
  } catch (error) {
    if (error) throw error;
  } finally {
    await browser.close();
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
