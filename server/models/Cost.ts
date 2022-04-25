import { Schema, model } from "mongoose";

// takes sub-schema for scale
import scaleSchema from "./schema/Scale";

const costSchema: Schema = new Schema({
  itemNumber: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // imported sub-schema
  scale: [scaleSchema],
  category: {
    type: String,
    required: true,
  },
  //TODO: figure out logic for handling the edge cases
  special: {
    type: Number,
  },
});

const Cost = model("Cost", costSchema);

export default Cost;
