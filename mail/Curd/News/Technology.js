import { news } from "../../model/News.js";
import { Router } from "express";

export const routerTechnology = Router();

// Technology news
routerTechnology.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  // الرقم اللي هتتخطاه اللي هيتحط في ال skip()
  const stTechnologyIndex = (page - 1) * limit;
  const Technology = await news
    .find({ kind: "تكنولوجيا" })
    .countDocuments()
    .exec();
  const totalPages = Math.ceil(Technology / limit);
  try {
    const newsData = await news
      .find({ kind: "تكنولوجيا" })
      .sort({ createdAt: -1 })
      // بتقلو هتجبلي اول عشر منتجات بعد ال stTechnologyIndex
      .limit(limit)
      .skip(stTechnologyIndex)
      .exec();
   return res.status(200).json({ newsData, totalPages });
  } catch (error) {
   return res.status(500).json({ message: error.message });
  }
});
// Technology news views
routerTechnology.get("/views", async (req, res) => {
  try {
    const newsData = await news
      .find({ kind: "تكنولوجيا" })
      .limit(200)
      .sort({ views: -1 })
      .sort({ createdAt: -1 })
      .limit(10);
   return res.status(200).json(newsData);
  } catch (error) {
   return res.status(500).json({ message: error.message });
  }
});
