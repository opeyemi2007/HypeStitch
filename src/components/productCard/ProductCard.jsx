import React, {useState, useEffect} from 'react'
import { GoHeart } from "react-icons/go";
import { FaOpencart } from "react-icons/fa6";
import './productCard.css'

const ProductCard = (props) => {
  const { name, category, price, image } = props.data;

  const [cart, setCart] = useState([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  
  const handleAddToCart = (product) => {
    
    const isProductInCart = cart.find((item) => item.id === product.id);
    if (isProductInCart) {
      alert("This item is already in your cart!");
      return;
    }
    
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  
  return (
    <div className='productCardWrapper'>
      <img src={image} alt="" />
        <div className="productCardContentsWrapper">
          <div className="infoHeaderHolder">
            <p className="category">{category}</p>
            <GoHeart className='addToFavouriteBtn'/>
          </div>


          <div className='infoHolder'>
            <h3>{price}</h3>
            <p>{name}</p>
            <button onClick={() => handleAddToCart(product)}>
              <FaOpencart/> add to cart
              </button>

          </div>
        </div>
    </div>
  )
}

export default ProductCard