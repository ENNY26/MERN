import React from 'react';
import deleteIcon from '../assets/delete.svg';
import editIcon from '../assets/edit.svg';
import './ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <div className="icons">
        <img src={editIcon} alt="Edit" className="icon edit-icon" />
        <img src={deleteIcon} alt="Delete" className="icon delete-icon" />
      </div>
    </div>
  );
};

export default ProductCard;
