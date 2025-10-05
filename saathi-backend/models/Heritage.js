import mongoose from "mongoose";

const heritageSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
});

export default mongoose.model("Heritage", heritageSchema);
