import { news } from "../../model/News.js";
import { Router } from "express";

export const routerInvestigations = Router();

// Investigations news
routerInvestigations.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  // الرقم اللي هتتخطاه اللي هيتحط في ال skip()
  const stInvestigationsIndex = (page - 1) * limit;
  const Investigations = await news
    .find({ kind: "تحقيقات" })
    .countDocuments()
    .exec();
  const totalPages = Math.ceil(Investigations / limit);
  try {
    const newsData = await news
      .find({ kind: "تحقيقات" })
      .sort({ createdAt: -1 })
      // بتقلو هتجبلي اول عشر منتجات بعد ال stInvestigationsIndex
      .limit(limit)
      .skip(stInvestigationsIndex)
      .exec();
    return res.status(200).json({ newsData, totalPages });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
// Investigations news views
routerInvestigations.get("/views", async (req, res) => {
  try {
    const newsData = await news
      .find({ kind: "تحقيقات" })
      .limit(200)
      .sort({ views: -1 })
      .sort({ createdAt: -1 })
      .limit(10);
    return res.status(200).json(newsData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
