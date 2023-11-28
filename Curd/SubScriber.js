import { subscribers } from "../model/SubScriber.js";
import { Router } from "express";
import { send } from "../mail/Email.js";

export const SubScriberRoute = Router();

SubScriberRoute.post("/", async (req, res) => {
  const { email } = req.body;
  try {
    const existingEmail = await subscribers.findOne({ email });
    if (existingEmail) {
      return res.status(200).json({ exists: true });
    } else if (!existingEmail) {
      const data = new subscribers({ email });
      await data.save();
      send(email);
      return res.status(200).json({ exists: false });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});
