import { Schema, model } from "mongoose";

const subjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true, //elimina los espacios de más
    },
    credits: {
      type: String,
      required: true,
    },
    hours: {
      type: String,
      required: true,
    },
    opcion: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Subject", subjectSchema);
