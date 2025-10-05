// routes/heritage.js
import express from "express";
import Heritage from "../models/heritage.js";

const router = express.Router();

// GET all heritage sites
router.get("/", async (req, res) => {
  const sites = await Heritage.find();
  res.json(sites);
});

// Add new heritage site (optional)
router.post("/", async (req, res) => {
  const site = await Heritage.create(req.body);
  res.json(site);
});

export default router;
