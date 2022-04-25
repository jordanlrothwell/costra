import { Schema } from "mongoose";

// sub-schema for the Matter model
const offerSchema: object = new Schema({
  isPlaintiff: {
    type: Boolean,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export default offerSchema;
