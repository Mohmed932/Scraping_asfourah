import { news } from "../../model/News.js";
import { Router } from "express";

export const routerEconomy = Router();

// Economy news
routerEconomy.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  // الرقم اللي هتتخطاه اللي هيتحط في ال skip()
  const stEconomyIndex = (page - 1) * limit;
  const Economy = await news.find({ kind: "اقتصاد" }).countDocuments().exec();
  const totalPages = Math.ceil(Economy / limit);
  try {
    const newsData = await news
      .find({ kind: "اقتصاد" })
      .sort({ createdAt: -1 })
      // بتقلو هتجبلي اول عشر منتجات بعد ال stEconomyIndex
      .limit(limit)
      .skip(stEconomyIndex)
      .exec();
    return res.status(200).json({ newsData, totalPages });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
// Economy news views
routerEconomy.get("/views", async (req, res) => {
  try {
    const newsData = await news
      .find({ kind: "اقتصاد" })
      .limit(200)
      .sort({ views: -1 })
      .sort({ createdAt: -1 })
      .limit(10);
    return res.status(200).json(newsData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
