import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";

const getRandomInterval = () => {
  return Math.floor(Math.random() * (10000 - 1000 + 1)) + 5000; // Random number between 1000ms (1s) and 5000ms (5s)
};

const GalleryBody = React.forwardRef(
  ({ leftImage, topRightImage, bottomRightImage }, ref) => {
    const [leftImageIndex, setLeftImageIndex] = useState(0);
    const [topRightImageIndex, setTopRightImageIndex] = useState(0);
    const [bottomRightImageIndex, setBottomRightImageIndex] = useState(0);

    const [leftImageVisible, setLeftImageVisible] = useState(true);
    const [topRightImageVisible, setTopRightImageVisible] = useState(true);
    const [bottomRightImageVisible, setBottomRightImageVisible] = useState(true);

    useEffect(() => {
      const leftIntervalId = setInterval(() => {
        setLeftImageVisible(false);
        setTimeout(() => {
          setLeftImageIndex((prevIndex) => (prevIndex + 1) % leftImage.length);
          setLeftImageVisible(true);
        }, 200); // Fade out duration
      }, getRandomInterval());

      const topRightIntervalId = setInterval(() => {
        setTopRightImageVisible(false);
        setTimeout(() => {
          setTopRightImageIndex((prevIndex) => (prevIndex + 1) % topRightImage.length);
          setTopRightImageVisible(true);
        }, 200);
      }, getRandomInterval());

      const bottomRightIntervalId = setInterval(() => {
        setBottomRightImageVisible(false);
        setTimeout(() => {
          setBottomRightImageIndex((prevIndex) => (prevIndex + 1) % bottomRightImage.length);
          setBottomRightImageVisible(true);
        }, 200);
      }, getRandomInterval());

      // Clear intervals on component unmount
      return () => {
        clearInterval(leftIntervalId);
        clearInterval(topRightIntervalId);
        clearInterval(bottomRightIntervalId);
      };
    }, [leftImage.length, topRightImage.length, bottomRightImage.length]);

    const fadeStyle = {
      transition: 'opacity 0.5s ease-in-out',
      opacity: 1,
    };

    const hiddenStyle = {
      opacity: 0,
    };

    // Updated text overlay style for "GALLERY" div
    const textOverlayStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2, // Ensure the text is on top of the images
      color: "white",
      textAlign: "center",
      fontSize: "35vw", // Size for "GALLERY" text
      padding: '20px',
      opacity: 1,
      textShadow: `0px 0px 15px rgba(0, 0, 0, 0.1)`, // Outline glow effect for the text
    };

    const imageContainerStyle = {
      flex: 1,
      backgroundSize: "cover",
      backgroundPosition: "center",
      // border: "5px solid black", // Added black border
      ...fadeStyle,
    };

    const containerStyle = {
      position: "relative", // Set relative position for containing absolutely positioned text
      display: "flex",
      height: "100vh",
      gap: "10px", // Added spacing between the images
      backgroundColor: 'rgba(0, 0, 0, 1)',
      padding: "10px", // Padding around the entire container
    };

    return (
      <div
        id="home"
        style={containerStyle}
        className="bgstyle text-light m-0"
      >
        {/* Overlay Text */}
        <h1 ref={ref} style={textOverlayStyle} className='roboto-mono-title'>
          GALLERY
        </h1>

        {/* Left Image */}
        <div
          style={{
            ...imageContainerStyle,
            backgroundImage: `url(${leftImage[leftImageIndex]})`,
            ...(!leftImageVisible && hiddenStyle), // Handle fade out
          }}
        ></div>

        {/* Right Column Images */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Top Right Image */}
          <div
            style={{
              ...imageContainerStyle,
              backgroundImage: `url(${topRightImage[topRightImageIndex]})`,
              ...(!topRightImageVisible && hiddenStyle), // Handle fade out
            }}
          ></div>

          {/* Bottom Right Image */}
          <div
            style={{
              ...imageContainerStyle,
              backgroundImage: `url(${bottomRightImage[bottomRightImageIndex]})`,
              ...(!bottomRightImageVisible && hiddenStyle), // Handle fade out
            }}
          ></div>
        </div>
      </div>
    );
  }
);

export default GalleryBody;
