import React, { useEffect } from 'react'
import deleteIcon from '../assets/delete.svg'
import editIcon from '../assets/edit.svg'
import watch from '../assets/watch.jpg'
import './Homepage.css'
import { useProductStore } from '../Store/product'


const HomePage = () => {

  const {fetchProducts, products} = useProductStore()

  
  useEffect (() => {
    fetchProducts()
  }, [fetchProducts])
  console.log("products", products)
  return (
    <div className="container">
    {/* Card 1 */}
    <div className="product-card">
      <img src={watch} alt="Wrist Watch" className="product-image" />
      <div className="product-info">
        <h2 className="product-title">Wrist Watch</h2>
        <p className="product-price">$300.88</p>
      </div>
      <div className="actions">
        <img src={editIcon} alt="Edit Icon" className="action-icon" />
        <img src={deleteIcon} alt="Delete Icon" className="action-icon" />
      </div>
    </div>

    {/* Card 2 */}
    <div className="product-card">
      <img src={watch} alt="Wrist Watch" className="product-image" />
      <div className="product-info">
        <h2 className="product-title">Wrist Watch</h2>
        <p className="product-price">$300.88</p>
      </div>
      <div className="actions">
        <img src={editIcon} alt="Edit Icon" className="action-icon" />
        <img src={deleteIcon} alt="Delete Icon" className="action-icon" />
      </div>
    </div>

    {/* Card 3 */}
    <div className="product-card">
      <img src={watch} alt="Wrist Watch" className="product-image" />
      <div className="product-info">
        <h2 className="product-title">Wrist Watch</h2>
        <p className="product-price">$300.88</p>
      </div>
      <div className="actions">
        <img src={editIcon} alt="Edit Icon" className="action-icon" />
        <img src={deleteIcon} alt="Delete Icon" className="action-icon" />
      </div>
    </div>
  </div>
  )
}

export default HomePage