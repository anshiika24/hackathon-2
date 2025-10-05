// routes/sos.js
import express from "express";
const router = express.Router();

// Example SOS trigger endpoint
router.post("/", (req, res) => {
  const { userId, location } = req.body;
  console.log("🚨 SOS ALERT:", { userId, location });
  // Here you would integrate SMS, email, or push notifications.
  res.json({ msg: "SOS alert sent successfully" });
});

export default router;
