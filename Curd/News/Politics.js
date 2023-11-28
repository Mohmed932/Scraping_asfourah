import { news } from "../../model/News.js";
import { Router } from "express";

export const routerPolitics = Router();

// Politics news
routerPolitics.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  // الرقم اللي هتتخطاه اللي هيتحط في ال skip()
  const stPoliticsIndex = (page - 1) * limit;
  const Politics = await news.find({ kind: "سياسه" }).countDocuments().exec();
  const totalPages = Math.ceil(Politics / limit);
  try {
    const newsData = await news
      .find({ kind: "سياسه" })
      .sort({ createdAt: -1 })
      // بتقلو هتجبلي اول عشر منتجات بعد ال stPoliticsIndex
      .limit(limit)
      .skip(stPoliticsIndex)
      .exec();
    return res.status(200).json({ newsData, totalPages });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
// Politics news views
routerPolitics.get("/views", async (req, res) => {
  try {
    const newsData = await news
      .find({ kind: "سياسه" })
      .limit(200)
      .sort({ views: -1 })
      .sort({ createdAt: -1 })
      .limit(10);
    return res.status(200).json(newsData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
