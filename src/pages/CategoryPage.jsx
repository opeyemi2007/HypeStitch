import React, {useState} from 'react'
import 'animate.css';
import { GoHeart } from "react-icons/go";
import { FaOpencart } from "react-icons/fa6";
import { MdOutlineFilterList } from "react-icons/md";
import '../styles/categoryPage.css'

const CategoryPage = () => {
  const [filterDropDown, setFilterDropDown] = useState(false);

  const handleFilterToggle = () => {
    setFilterDropDown(!filterDropDown);
  };

  const [category, setCategory] = useState('All');

  const products = [
    { id: 1, name: 'Product 1', price: '$100', category: 'New', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$200',  category: 'Featured', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '$300', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: '$400', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: '$500', image: 'https://via.placeholder.com/150' },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategoryChange = (category) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
    setCategory(category);

  }





  return (
    <div className='categorywrapper'>
       <div className="loginHeader">
           <div className="headerCover"><h1>Category</h1></div> 
         </div>
      <div className="categoriesHolder">
        <div className="categoryNavHeader">
          <div className="filter" onClick={handleFilterToggle}>Filter<MdOutlineFilterList /></div>
          {
            filterDropDown && (
              <div className="filterDropDown animate__animated animate__fadeIn">
                <div className="filterWrapps">
                  <a onClick={() => handleCategoryChange('All')}>All</a>
                  <a onClick={() => handleCategoryChange('New')}>New</a>
                  <a onClick={() => handleCategoryChange('Featured')}>Featured</a>
                  <a onClick={() => handleCategoryChange('Offer')}>Offer</a>
                </div>
              </div>
            )
          }
        </div>
        <div className="productsHolder">
          {filteredProducts.length > 0 ? (filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <div className="infoHeaderHolder"><GoHeart className='addToFavouriteBtn'/></div>
              <div className="infoHolder">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button onClick={() => handleAddToCart(product)}>
                  <FaOpencart /> Add to Cart
                </button>
              </div>
            </div>
          ))) : ( <p>No products found in this category.</p> )}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage