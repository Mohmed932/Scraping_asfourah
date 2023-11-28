import { news } from "../../model/News.js";
import { Router } from "express";

export const routerEvents = Router();

// Events news
routerEvents.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  // الرقم اللي هتتخطاه اللي هيتحط في ال skip()
  const stEventsIndex = (page - 1) * limit;
  const Events = await news.find({ kind: "احداث" }).countDocuments().exec();
  const totalPages = Math.ceil(Events / limit);
  try {
    const newsData = await news
      .find({ kind: "احداث" })
      .sort({ createdAt: -1 })
      // بتقلو هتجبلي اول عشر منتجات بعد ال stEventsIndex
      .limit(limit)
      .skip(stEventsIndex)
      .exec();
    return res.status(200).json({ newsData, totalPages });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
// Events news views
routerEvents.get("/views", async (req, res) => {
  try {
    const newsData = await news
      .find({ kind: "احداث" })
      .limit(200)
      .sort({ views: -1 })
      .sort({ createdAt: -1 })
      .limit(10);
    return res.status(200).json(newsData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
