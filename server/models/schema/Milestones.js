import { Schema } from "mongoose";

// import helper to format dates
import dateFormatter from "../../utils/dateFormatter";

// sub-schema for the Matter model
const milestoneSchema = new Schema(
  {
    defence: {
      type: Date,
      get: dateFormatter(),
    },
    preHearing: {
      type: Date,
      get: dateFormatter(),
    },
    arbitration: {
      type: Date,
      get: dateFormatter(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

export default milestoneSchema;
