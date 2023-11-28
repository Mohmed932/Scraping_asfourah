import { Router } from "express";
import { news } from "../../model/News.js";

export const Similerrouter = Router();

Similerrouter.get("/:id", async (req, res) => {
  const params = req.params.id;
  try {
    const kind = await news.findOne({ _id: params });
    const kindOfNews = await news
      .find({ kind: kind.kind })
      .sort({ createdAt: -1 })
      .limit(7)
      .skip(20);
    return res.status(200).json(kindOfNews);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
