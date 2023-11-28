import { news } from "../../model/News.js";
import { Router } from "express";

export const routerWorld = Router();

// World news
routerWorld.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  // الرقم اللي هتتخطاه اللي هيتحط في ال skip()
  const stWorldIndex = (page - 1) * limit;
  const World = await news.find({ kind: "العالم" }).countDocuments().exec();
  const totalPages = Math.ceil(World / limit);
  try {
    const newsData = await news
      .find({ kind: "العالم" })
      .sort({ createdAt: -1 })
      // بتقلو هتجبلي اول عشر منتجات بعد ال stWorldIndex
      .limit(limit)
      .skip(stWorldIndex)
      .exec();
    return res.status(200).json({ newsData, totalPages });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
// World news views
routerWorld.get("/views", async (req, res) => {
  try {
    const newsData = await news
      .find({ kind: "العالم" })
      .limit(200)
      .sort({ views: -1 })
      .sort({ createdAt: -1 })
      .limit(10);
    return res.status(200).json(newsData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
