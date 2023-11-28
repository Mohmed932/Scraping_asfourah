import { Router } from "express";
import { news } from "../../model/News.js";

export const routerSearch = Router();

routerSearch.get("/", async (req, res) => {
  try {
    const { search } = req.query;
    const query = search ? { title: { $regex: search, $options: "i" } } : {};
    const data = await news.find(query);
   return res.status(200).json(data);
  } catch (error) {
   return res.status(500).json({ message: error.message });
  }
});
