import { Schema } from "mongoose";

const quantumSchema = new Schema({
  claimed: {
    type: Number,
  },
  awarded: {
    type: Number,
  },
});

export default quantumSchema;
