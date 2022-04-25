import { Schema, model } from "mongoose";

// takes sub-schema for quantum, offer, and milestones
import { quantumSchema, offerSchema, milestoneSchema } from "./schema";

const matterSchema = new Schema({
  reference: {
    type: String,
    required: true,
  },
  // imported sub-schema
  quantum: [quantumSchema],
  offers: [offerSchema],
  milestones: [milestoneSchema],
});

const Matter = model("Matter", matterSchema);

export default Matter;
