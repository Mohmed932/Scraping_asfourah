import { Router } from "express";
import { news } from "../../model/News.js";

export const routerSingleNews = Router();

routerSingleNews.get("/:id", async (req, res) => {
  try {
    const newsData = await news.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    return res.status(200).json(newsData);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});
