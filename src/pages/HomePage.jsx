import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import Subscription from '../components/subscription/Subscription';
import BackToTopButton from '../components/back-to-top-btn/BackToTopBtn';
import ProductCard from '../components/productCard/ProductCard';

const HomePage = () => {
  const [category, setCategory] = useState('All');
 
  const handleCategoryChange = (category) => {
    setCategory(category);
  };
  
  const ProductsData = [
    {
      "id": 1,
      "name": "Men's cotton coat",
      "category": "New",
      "price": "$29.99",
      "image": "images/Men's cotton coat - Black _ XL.jpeg"
    },
    {
      "id": 2,
      "name": "Mens Black Quilted Sheep Leather Pant",
      "category": "Featured",
      "price": "$49.99",
      "image": "images/Mens Black Quilted Sheep Leather Pant - 48 _ 29.jpeg"
    },
    {
      "id": 3,
      "name": "Pocket Collared Shirts Top",
      "category": "Offer",
      "price": "$29.99",
      "image": "images/OYOANGLE Men's Colorblock Plaid Print Button Down Long Sleeve Pocket Collared Shirts Top.jpeg"
    },
    {
      "id": 4,
      "name": "Jaqueta de algodão masculina",
      "category": "New",
      "price": "$34.99",
      "image": "images/Jaqueta de algodão masculina rasgada com bolsos com lapela em Denim azul, sem camiseta, estilo festa grunge rapper.jpeg"
    },
    {
      "id": 5,
      "name": "Turtleneck Sweater",
      "category": "Featured",
      "price": "$79.99",
      "image": "images/Men's Turtleneck Sweater Pullover Sweater Jumper Striped Sweater Ribbed Cable Knit Regular Knitted Color Block Turtleneck Keep Warm Modern Contemporary Daily Wear Going out Clothing Apparel Fall 2025 - $42_.jpeg"
    },
    {
      "id": 6,
      "name": "cotton coat",
      "category": "New",
      "price": "$39.99",
      "image": "images/Men's cotton coat - Black _ XL.jpeg"
    },
  ]
  const filteredProducts = ProductsData.filter((product) =>
    category === 'All' || product.category === category
  );


  return (
    <>
      <div className='homePageContainer'>
        <div className="heroHeader">
          <img src="images/shoppingLady.jpg" alt="" />
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
          <img src="images/Fashion Loose Rabbit Printed Short-sleeved T-shirt - Blue _ M.jpg" alt="" />
          <div className="shopByCategorieCardTextWRapper">
            <h1>Fashion Men</h1>
            <button className='newDealbtn'>Best New Deals</button>
            <h3>New Collection</h3>
          </div>
        </div>

        <div className="shopByCategoriesCard">
          <img src="images/cba0a6dd-238a-4eef-bba7-33950de2d7d3.jpg" alt="" />
          <div className="shopByCategorieCardTextWRapper">
            <h1>Kids Wears</h1>
            <button className='newDealbtn'>Best New Deals</button>
          </div>
        </div>


        <div className="shopByCategoriesCard">
          <img src="images/streetwear-removebg-preview.png" alt="" />
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
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, key) => (
               <ProductCard key={key} data={product}/>
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
