import { Schema, model } from "mongoose";

// takes sub-schema for scale
import { scaleSchema } from "./schema";

const costSchema = Schema({
  itemNumber: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
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

const Model = model("Cost", costSchema);

export default Model;
