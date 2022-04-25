import { Schema } from "mongoose";

import dateFormatter from "../../utils/dateFormatter";

const offerSchema = new Schema(
  {
    isPlaintiff: {
      type: Boolean,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
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

export default offerSchema;
