import { news } from "../../model/News.js";
import { Router } from "express";

export const routerHealth = Router();

// Health news
routerHealth.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  // الرقم اللي هتتخطاه اللي هيتحط في ال skip()
  const stHealthIndex = (page - 1) * limit;
  const Health = await news.find({ kind: "صحه" }).countDocuments().exec();
  const totalPages = Math.ceil(Health / limit);
  try {
    const newsData = await news
      .find({ kind: "صحه" })
      .sort({ createdAt: -1 })
      // بتقلو هتجبلي اول عشر منتجات بعد ال stHealthIndex
      .limit(limit)
      .skip(stHealthIndex)
      .exec();
  return res.status(200).json({ newsData, totalPages });
  } catch (error) {
   return res.status(500).json({ message: error.message });
  }
});
// Health news views
routerHealth.get("/views", async (req, res) => {
  try {
    const newsData = await news
      .find({ kind: "صحه" })
      .limit(200)
      .sort({ views: -1 })
      .sort({ createdAt: -1 })
      .limit(10);
   return res.status(200).json(newsData);
  } catch (error) {
   return res.status(500).json({ message: error.message });
  }
});
