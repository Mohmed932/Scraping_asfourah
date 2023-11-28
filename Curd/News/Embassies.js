import { news } from "../../model/News.js";
import { Router } from "express";

export const routerEmbassies = Router();

// Embassies news
routerEmbassies.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  // الرقم اللي هتتخطاه اللي هيتحط في ال skip()
  const stEmbassiesIndex = (page - 1) * limit;
  const Embassies = await news.find({ kind: "سفارات" }).countDocuments().exec();
  const totalPages = Math.ceil(Embassies / limit);
  try {
    const newsData = await news
      .find({ kind: "سفارات" })
      .sort({ createdAt: -1 })
      // بتقلو هتجبلي اول عشر منتجات بعد ال stEmbassiesIndex
      .limit(limit)
      .skip(stEmbassiesIndex)
      .exec();
    return res.status(200).json({ newsData, totalPages });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
// Embassies news views
routerEmbassies.get("/views", async (req, res) => {
  try {
    const newsData = await news
      .find({ kind: "سفارات" })
      .limit(200)
      .sort({ views: -1 })
      .sort({ createdAt: -1 })
      .limit(10);
    return res.status(200).json(newsData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
