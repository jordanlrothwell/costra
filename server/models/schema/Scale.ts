import { Schema } from "mongoose";

// Create an interface representing a document in MongoDB
interface scaleIF {
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
  F: number;
  G: number;
}

// Create a Schema corresponding to the document interface
const scaleSchema = new Schema<scaleIF>({
  A: {
    type: Number,
  },
  B: {
    type: Number,
  },
  C: {
    type: Number,
  },
  D: {
    type: Number,
  },
  E: {
    type: Number,
  },
  F: {
    type: Number,
  },
  G: {
    type: Number,
  },
});

export default scaleSchema;
