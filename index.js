import express from "express";
import { connect } from "mongoose";
import puppeteer from "puppeteer";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import * as dotenv from "dotenv";
import { Alqaheranews } from "./Scraping/Alqaheranews.js";

dotenv.config();

const uri = process.env.MONGODB_URL;
const port = process.env.PORT || "5000";

const app = express();

// middleware
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

// puppeteer scraping route
app.get("/scrape", async (req, res) => {
  let browser = null;
  try {
    browser = await puppeteer.launch({
      headless: process.env.NODE_ENV === "production",
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

    await Alqaheranews(browser);

    const page = await browser.newPage();
    await page.goto("https://alqaheranews-v8zg.onrender.com", {
      waitUntil: "domcontentloaded",
    });
    await page.close();

    res.send("Scraping completed!");
  } catch (error) {
    console.error("Error during scraping:", error);
    res.status(500).send("Internal Server Error");
  } finally {
    if (browser) {
      await browser.close();
    }
  }
});

app.use("*", (req, res) => {
  res.status(404).json("Page not found");
});

// connect to the database then listen to the server
connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
