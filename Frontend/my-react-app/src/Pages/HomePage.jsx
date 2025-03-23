import React, { useEffect } from 'react';
import './Homepage.css';
import { useProductStore } from '../Store/product';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

const HomePage = () => {
  const { fetchProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      {products.length === 0 ? (
        <div className="no-products">
          No products created.{" "}
          <Link to="/create-page">
            <span>Click here to create</span>
          </Link>
        </div>
      ) : (
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      )}
    </div>
  );
};

export default HomePage;