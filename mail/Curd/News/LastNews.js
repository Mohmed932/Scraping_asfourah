import { Router } from "express";
import { news } from "../../model/News.js";

export const routerLastNews = Router();

routerLastNews.get("/", async (req, res) => {
  try {
    const newsData = await news.find().sort({ createdAt: -1 }).limit(14);
    return res.status(200).json(newsData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
