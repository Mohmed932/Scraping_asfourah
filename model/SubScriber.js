import { Schema, model } from "mongoose";

const allSubScriber = new Schema(
  {
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true,
    },
  },
  { timestamps: true }
);

export const subscribers = model("subscribers", allSubScriber);
