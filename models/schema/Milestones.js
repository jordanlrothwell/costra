import { Schema } from "mongoose";

import dateFormatter from "../../utils/dateFormatter";

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
