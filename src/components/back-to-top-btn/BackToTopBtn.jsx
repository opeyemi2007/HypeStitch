import React, { useState, useEffect } from 'react';
import { FaCircleArrowUp } from "react-icons/fa6";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolled down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add scroll event listener when the component is mounted
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button 
        onClick={scrollToTop} 
        style={styles.button}
      >
        <FaCircleArrowUp />
      </button>
    )
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '25px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 10,
  },
};

export default BackToTopButton;
