import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll events
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) { // Adjust the scroll threshold as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Adding and removing the window scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <div style={{
        position: 'fixed',
        bottom: '20px',  // Distance from the bottom
        right: '20px',  // Distance from the right
        textAlign: 'center',
        cursor: 'pointer',
        zIndex: 1000,
      }}>
        <button
          onClick={scrollToTop}
          style={{
            padding: '10px',
            fontSize: '16px',
            background: 'white',  // White background
            borderRadius: '50%',  // Circular shape
            color: 'black',  // Black arrow color
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',  // Circle size
            height: '50px',  // Circle size
            border: '2px solid black'  // Optional: Adds a black border
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 12a.5.5 0 0 1-.5-.5V5.707l-3.146 3.147a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L8.5 5.707V11.5a.5.5 0 0 1-.5.5z"/>
          </svg>
        </button>
      </div>
    )
  );
};

export default BackToTop;
