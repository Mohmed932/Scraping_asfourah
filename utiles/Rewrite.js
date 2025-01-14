import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const rewriteScence = async (scence) => {
  const prompt = `اعد صياغه هذا النص بعبارات قصيره ${scence}`;
  const result = await model.generateContent(prompt);
  return result.response.text();
};