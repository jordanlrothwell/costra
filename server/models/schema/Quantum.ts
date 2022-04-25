import { Schema } from "mongoose";

// Create an interface representing a document in MongoDB
interface quantumIF {
  claimed?: number;
  awarded?: number;
}

// Create a Schema corresponding to the document interface
const quantumSchema = new Schema<quantumIF>({
  claimed: {
    type: Number,
  },
  awarded: {
    type: Number,
  },
});

export default quantumSchema;
