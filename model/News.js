import { Schema, model } from "mongoose";

const NewsSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    img: {
      type: String,
      required: false,
    },
    desc:{
      type:Array,
      required:true
    }
  },
  { timestamps: true }
);

export const News = model("News", NewsSchema);
