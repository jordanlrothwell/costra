import { Schema, model } from "mongoose";

// takes sub-schema for quantum, offer, and milestones
import quantumSchema from "./schema/Quantum";
import milestoneSchema from "./schema/Milestone";
import offerSchema from "./schema/Offer";

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
