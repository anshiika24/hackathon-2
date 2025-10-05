// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.js";
import sosRoutes from "./routes/sos.js";
import heritageRoutes from "./routes/heritage.js";
import feedbackRoutes from "./routes/feedback.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/sos", sosRoutes);
app.use("/api/heritage", heritageRoutes);
app.use("/api/feedback", feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
