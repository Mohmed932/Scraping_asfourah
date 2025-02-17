import { News } from "../model/News.js";

export const InsertDataToDb = async (data) => {
  try {
    const saving = new News(data);
    const SavedData = await saving.save();
    console.log("saving news");
    return SavedData;
  } catch (error) {
    throw new Error(error.message);
  }
};
