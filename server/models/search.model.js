import { Schema, model } from "mongoose";

const searchSchema = new Schema(
  {
    city: { type: String, unique: true },
  },
  {
    timestamps: true,
  }
);

export default model("Search", searchSchema);