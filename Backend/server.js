import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from './models/product.model.js'; // Add .js if necessary

dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON data

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process if connection fails
  });

app.post('/products', async (req, res) => {
  const product = req.body; // User will send data
  if (!product.name || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide all fields' });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error('Error in creating product:', error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

console.log('MONGO_URI:', process.env.MONGO_URI);
app.listen(5000, () => {
  console.log('Server started at http://localhost:5000');
});
qq