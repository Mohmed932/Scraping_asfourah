import { News } from "../model/News.js";



export const InsertDataToDb = async(data) => {
    try {
        const saving = new News(data);
        await saving.save();
        console.log("saving news");
    } catch (error) {
        throw new Error(error.message)
    }
};