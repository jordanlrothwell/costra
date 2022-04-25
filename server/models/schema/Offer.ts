import { Schema } from "mongoose";

// Create an interface representing a document in MongoDB
interface offerIF {
  isPlaintiff: boolean;
  amount: number;
  date: Date;
}

// Create a Schema corresponding to the document interface
const offerSchema = new Schema<offerIF>({
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
