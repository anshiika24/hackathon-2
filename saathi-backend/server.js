// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import connectDB from './config/db.js';
// import heritageRoutes from './routes/heritageRoutes.js';
// import authRoutes from './routes/authRoutes.js';

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());
// app.use(cors());

// // API Routes
// app.use('/api/heritage', heritageRoutes);
// app.use('/api/auth', authRoutes);

// app.get('/', (req, res) => {
//     res.send('🚀 Saathi API is running!');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ Server is live on http://localhost:${PORT}`));
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import heritageRoutes from './routes/heritageRoutes.js';
// import authRoutes from './routes/authRoutes.js'; // Agar authRoutes hain toh isse uncomment karein

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/heritage', heritageRoutes);
// app.use('/api/auth', authRoutes); // Agar authRoutes hain toh isse uncomment karein

app.get('/', (req, res) => {
    res.send('🚀 Saathi API is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server is live on http://localhost:${PORT}`));