import { Schema } from "mongoose";

// sub-schema for the Matter model
const milestoneSchema = new Schema(
  {
    defence: {
      type: Date,
    },
    preHearing: {
      type: Date,
    },
    arbitration: {
      type: Date,
    },
  },
);

export default milestoneSchema;
