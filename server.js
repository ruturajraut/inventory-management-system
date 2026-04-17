import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import mongoose from 'mongoose';  // ← Add this
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';  // ← Add this

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

//for testing
import Product from './models/Product.js';  // ← Add this



// Test route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Inventory Management API'
  });
});

app.use('/api/products', productRoutes);  // ← Add this

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
  console.log(`📍 Visit: http://localhost:${PORT}`);
});