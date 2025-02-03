import React, { useEffect } from 'react'
import deleteIcon from '../assets/delete.svg'
import editIcon from '../assets/edit.svg'
import watch from '../assets/watch.jpg'
import './Homepage.css'
import { useProductStore } from '../Store/product'
import { Link } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'


const HomePage = () => {

  const {fetchProducts, products} = useProductStore()

  
  useEffect (() => {
    fetchProducts()
  }, [fetchProducts])
  console.log("products", products)
  return (
    <div className="container">
      <div>
        No products created. 
        <Link to={"/create-page"}>
        <span>click here to create</span>
        </Link>
      </div>
    {products.map((product) =>(
      <ProductCard key={product._id} product={product}/>
    ))}
    
  </div>
  )
}

export default HomePage