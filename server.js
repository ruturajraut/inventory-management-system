import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import mongoose from 'mongoose';  // ← Add this
import authRoutes from './routes/authRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Inventory Management API'
  });
});

// Health check + Database status
// app.get('/api/health', (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: 'API is healthy',
//     database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',  // ← Add this
//     timestamp: new Date().toISOString()
//   });
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
  console.log(`📍 Visit: http://localhost:${PORT}`);
});