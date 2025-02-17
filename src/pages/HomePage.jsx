import React, { useState, useEffect } from 'react';
import ProductsData from '../productsData/Products.json';
import '../styles/HomePage.css';
import { GoHeart } from "react-icons/go";
import { FaOpencart } from "react-icons/fa6";
import Subscription from '../components/subscription/Subscription';
import BackToTopButton from '../components/back-to-top-btn/BackToTopBtn';

const HomePage = () => {
  const [category, setCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

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

  const filteredProducts = products.filter((product) =>
    category === 'All' || product.category === category
  );

  return (
    <>
      <div className='homePageContainer'>
        <div className="heroHeader">
          <img src="src/assets/images/shoppingLady.jpg" alt="" />
          <div className="heroHeaderTextWrapper">
            <p>60% Discount</p>
            <h1>Valentine Collection</h1>
            <span>Best Clothing Collection By 2025!</span>
            <button className="shopNow">Shop Now</button>
          </div>
        </div>


             <BackToTopButton/>

        <div className="shopCategoriesHeadingHolder"><h1>Shop By Category</h1></div>
        <div className="shopByCategoriesSection">
        <div className="shopByCategoriesCard">
          <img src="src/assets/images/Fashion Loose Rabbit Printed Short-sleeved T-shirt - Blue _ M.jpg" alt="" />
          <div className="shopByCategorieCardTextWRapper">
            <h1>Fashion Men</h1>
            <button className='newDealbtn'>Best New Deals</button>
            <h3>New Collection</h3>
          </div>
        </div>

        <div className="shopByCategoriesCard">
          <img src="src/assets/images/cba0a6dd-238a-4eef-bba7-33950de2d7d3.jpg" alt="" />
          <div className="shopByCategorieCardTextWRapper">
            <h1>Kids Wears</h1>
            <button className='newDealbtn'>Best New Deals</button>
          </div>
        </div>


        <div className="shopByCategoriesCard">
          <img src="src/assets/images/streetwear-removebg-preview.png" alt="" />
          <div className="shopByCategorieCardTextWRapper">
            <h1>Street Wear</h1>
            <button className='newDealbtn'>Best New Deals</button>
            <h3>New Collection</h3>
          </div>
        </div>
        </div>  

        <div className="latestProductSection">
          <div className="latestProductSectionHeading">
            <h1>Latest Products</h1>
            <div className="navsHolder">
              <a onClick={() => handleCategoryChange('All')}>All</a>
              <a onClick={() => handleCategoryChange('New')}>New</a>
              <a onClick={() => handleCategoryChange('Featured')}>Featured</a>
              <a onClick={() => handleCategoryChange('Offer')}>Offer</a>
            </div>
          </div>

          <div className="productContent">
            {ProductsData.length > 0 ? (
              ProductsData.map((product, key) => (
                <div key={product.id} className="productCard">
                  <img src={product.image} alt={product.name} />
                  <div className="productCardInfoCover">
                    <div className="infoHeaderHolder"><GoHeart className='addToFavouriteBtn'/></div>
                    <div className="infoHolder">
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                      <button onClick={() => handleAddToCart(product)}>
                        <FaOpencart /> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found in this category.</p>
            )}
          </div>
        </div>
        <Subscription/>
      </div>
    </>
  );
}

export default HomePage;
