import { news } from "../../model/News.js";
import { Router } from "express";

export const routerArt = Router();

// art news
routerArt.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  // الرقم اللي هتتخطاه اللي هيتحط في ال skip()
  const startIndex = (page - 1) * limit;
  const art = await news.find({ kind: "فن" }).countDocuments().exec();
  const totalPages = Math.ceil(art / limit);
  try {
    const newsData = await news
      .find({ kind: "فن" })
      .sort({ createdAt: -1 })
      // بتقلو هتجبلي اول عشر منتجات بعد ال startIndex
      .limit(limit)
      .skip(startIndex)
      .exec();
    return res.status(200).json({ newsData, totalPages });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
// art news views
routerArt.get("/views", async (req, res) => {
  try {
    const newsData = await news
      .find({ kind: "فن" })
      .limit(200)
      .sort({ views: -1 })
      .sort({ createdAt: -1 })
      .limit(10);
    return res.status(200).json(newsData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
