import express from "express";
import { connect } from "mongoose";
import * as dotenv from "dotenv";
import { Puppeteer } from "./Puppeteer.js";
dotenv.config();

const uri = process.env.MONGODB_URL;
const port = process.env.PORT || "5000";

const app = express();

// routes
app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});
// puppeteer scraping
await Puppeteer();

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

// https://www.snabusiness.com/
