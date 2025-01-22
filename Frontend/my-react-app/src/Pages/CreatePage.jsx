import React, { useState } from 'react';
import './CreatePage.css';
import { useProductStore } from '../Store/product';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct, products } = useProductStore();

  const handleAddProduct = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    const { success, message } = await createProduct(newProduct);

    console.log("Success:", success);
    console.log("Message:", message);

    if (success) {
      console.log("Updated Products:", products); // Log updated products
    } else {
      console.error("Error adding product:", message);
    }
  };

  return (
    <div className="container">
      <h1>Product Entry Form</h1>
      <form className="input-form" onSubmit={handleAddProduct}>
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter product name"
            required
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            placeholder="Enter product price"
            required
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            placeholder="Enter image URL"
            required
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default CreatePage;
