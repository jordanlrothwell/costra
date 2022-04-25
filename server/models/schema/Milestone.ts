import { Schema } from "mongoose";

// TS interace representing a document in MongoDB
interface milestoneIF {
  defence?: Date;
  preHearing?: Date;
  arbitration?: Date;
}

// Schema corresponding to the document interface
const milestoneSchema = new Schema<milestoneIF> ({
  defence: {
    type: Date,
  },
  preHearing: {
    type: Date,
  },
  arbitration: {
    type: Date,
  },
});

export default milestoneSchema;
