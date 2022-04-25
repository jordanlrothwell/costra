import { Schema } from "mongoose";

import { quantumSchema, offerSchema, milestoneSchema } from "./schema";

const matterSchema = new Schema({
  reference: {
    type: String,
    required: true,
  },
  quantum: [quantumSchema],
  offers: [offerSchema],
  milestones: [milestoneSchema],
});
