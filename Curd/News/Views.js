import { Router } from "express";
import { news } from "../../model/News.js";

export const routerViews = Router();

routerViews.get("/", async (req, res) => {
  try {
    const newsData = await news
      .find()
      .sort({ views: -1 })
      .sort({ createdAt: -1 })
      .limit(10);
  return res.status(200).json(newsData);
  } catch (error) {
  return res.status(500).json({ message: error.message });
  }
});
