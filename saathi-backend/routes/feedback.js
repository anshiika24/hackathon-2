// routes/feedback.js
import express from "express";
import Feedback from "../models/feedback.js";

const router = express.Router();

// Submit feedback
router.post("/", async (req, res) => {
  const { userId, message, location } = req.body;
  const feedback = await Feedback.create({ userId, message, location });
  res.json({ msg: "Feedback submitted", feedback });
});

// Get all feedback (admin use)
router.get("/", async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
});

export default router;
