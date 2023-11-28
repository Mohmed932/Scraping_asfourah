import { news } from "../../model/News.js";
import { Router } from "express";

export const routerCulture = Router();

// Culture news
routerCulture.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  // الرقم اللي هتتخطاه اللي هيتحط في ال skip()
  const stCultureIndex = (page - 1) * limit;
  const Culture = await news.find({ kind: "ثقافه" }).countDocuments().exec();
  const totalPages = Math.ceil(Culture / limit);
  try {
    const newsData = await news
      .find({ kind: "ثقافه" })
      .sort({ createdAt: -1 })
      // بتقلو هتجبلي اول عشر منتجات بعد ال stCultureIndex
      .limit(limit)
      .skip(stCultureIndex)
      .exec();
    return res.status(200).json({ newsData, totalPages });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
// Culture news views
routerCulture.get("/views", async (req, res) => {
  try {
    const newsData = await news
      .find({ kind: "ثقافه" })
      .limit(200)
      .sort({ views: -1 })
      .sort({ createdAt: -1 })
      .limit(10);
    return res.status(200).json(newsData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
