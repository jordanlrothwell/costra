import { Schema } from "mongoose";

// sub-schema for the Cost model
const scaleSchema = new Schema({
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
