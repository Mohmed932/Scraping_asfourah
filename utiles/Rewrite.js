import { GoogleGenerativeAI } from "@google/generative-ai";

export const rewriteScence = async (scence, key) => {
  try {
    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `اكتب هذا النص بطريقة مختصرة وبأسلوب جذاب: ${scence}`;
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error Message: ", error);
    return scence;
  }
};
