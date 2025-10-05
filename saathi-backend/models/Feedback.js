import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  userId: String,
  message: String,
  location: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Feedback", feedbackSchema);
