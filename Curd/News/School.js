import { news } from "../../model/News.js";
import { Router } from "express";

export const routerSchool = Router();

// School news
routerSchool.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  // الرقم اللي هتتخطاه اللي هيتحط في ال skip()
  const stSchoolIndex = (page - 1) * limit;
  const School = await news.find({ kind: "تعليم" }).countDocuments().exec();
  const totalPages = Math.ceil(School / limit);
  try {
    const newsData = await news
      .find({ kind: "تعليم" })
      .sort({ createdAt: -1 })
      // بتقلو هتجبلي اول عشر منتجات بعد ال stSchoolIndex
      .limit(limit)
      .skip(stSchoolIndex)
      .exec();
    return res.status(200).json({ newsData, totalPages });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
// School news views
routerSchool.get("/views", async (req, res) => {
  try {
    const newsData = await news
      .find({ kind: "تعليم" })
      .limit(200)
      .sort({ views: -1 })
      .sort({ createdAt: -1 })
      .limit(10);
    return res.status(200).json(newsData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
