import React, { useState, useEffect } from 'react';
import '../styles/CartPage.css'

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="cartPageContainer">
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <div className="cartItems">
          {cart.map((item) => (
            <div key={item.id} className="cartItem">
              <img src={item.image} alt={item.name} />
              <div className='CartProductInfoHolder'>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;

