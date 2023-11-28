import { news } from "../../model/News.js";
import { Router } from "express";

export const routerSports = Router();

// Sports news
routerSports.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  // الرقم اللي هتتخطاه اللي هيتحط في ال skip()
  const stSportsIndex = (page - 1) * limit;
  const Sports = await news.find({ kind: "رياضه" }).countDocuments().exec();
  const totalPages = Math.ceil(Sports / limit);
  try {
    const newsData = await news
      .find({ kind: "رياضه" })
      .sort({ createdAt: -1 })
      // بتقلو هتجبلي اول عشر منتجات بعد ال stSportsIndex
      .limit(limit)
      .skip(stSportsIndex)
      .exec();
    return res.status(200).json({ newsData, totalPages });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
// Sports news views
routerSports.get("/views", async (req, res) => {
  try {
    const newsData = await news
      .find({ kind: "رياضه" })
      .limit(200)
      .sort({ views: -1 })
      .sort({ createdAt: -1 })
      .limit(10);
    return res.status(200).json(newsData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
