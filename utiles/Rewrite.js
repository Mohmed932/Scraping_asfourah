import { GoogleGenerativeAI } from "@google/generative-ai";

const removeStarsFromText = (text) => {
  return text.replace(/\*\*(.*?)\*\*/g, "$1");
};

export const rewriteScence = async (scence, key) => {
  try {
    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `اكتب هذا النص بطريقة مختصرة وبأسلوب جذاب: ${scence}`;
    const result = await model.generateContent(prompt);
    const text = removeStarsFromText(result.response.text());
    return text;
  } catch (error) {
    console.error("Error Message: ", error);
    return scence;
  }
};
