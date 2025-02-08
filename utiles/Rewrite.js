import { GoogleGenerativeAI } from "@google/generative-ai";

export const rewriteScence = async (scence, key) => {
  const genAI = new GoogleGenerativeAI(key);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `اكتب هذا النص بطريقة مختصرة وبأسلوب جذاب: ${scence}`;
  const result = await model.generateContent(prompt);
  return result.response.text();
};
