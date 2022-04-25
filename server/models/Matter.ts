import { Schema, model } from "mongoose";

import quantumSchema from "./schema/Quantum";
import milestoneSchema from "./schema/Milestone";
import offerSchema from "./schema/Offer";

// Create an interface representing a document in MongoDB
interface matterIF {
  reference: string;
  quantum: Schema;
  offers: Schema;
  milestones: Schema;
}

// Create a Schema corresponding to the document interface
const matterSchema = new Schema<matterIF>({
  reference: {
    type: String,
    required: true,
  },
  quantum: quantumSchema,
  offers: offerSchema,
  milestones: milestoneSchema,
});

const Matter = model("Matter", matterSchema);

export default Matter;
