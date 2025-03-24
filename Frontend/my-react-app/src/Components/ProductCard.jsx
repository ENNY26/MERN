import React from 'react';
import deleteIcon from '../assets/delete.svg';
import editIcon from '../assets/edit.svg';
import { useProductStore } from '../Store/product'; // Import the store
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { deleteProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      alert(message);
    }
    alert('Product deleted successfully');
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <div className="icons">
        <img src={editIcon} alt="Edit" className="icon edit-icon" />
        <img
          onClick={() => handleDeleteProduct(product._id)} // Pass product._id here
          src={deleteIcon}
          alt="Delete"
          className="icon delete-icon"
        />
      </div>
    </div>
  );
};

export default ProductCard;