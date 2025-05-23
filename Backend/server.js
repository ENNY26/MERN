import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';import productRouter from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT  = process.env.PORT
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
   
  app.use('/api/products', productRouter);
 
console.log('MONGO_URI:', process.env.MONGO_URI);
app.listen(PORT, () => {
  console.log('Server started at http://localhost:' + PORT);
});
