import { Schema } from "mongoose";

// sub-schema for the Matter model
const quantumSchema = new Schema({
  claimed: {
    type: Number,
  },
  awarded: {
    type: Number,
  },
});

export default quantumSchema;
