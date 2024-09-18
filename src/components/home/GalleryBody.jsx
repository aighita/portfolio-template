import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';

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
      fontSize: "34vw", // Smaller font size
      // fontWeight: "bold", // Bold text
      // backgroundColor: 'rgba(0, 0, 0, 1)', // Fully dark background
      padding: '20px', // Add padding to the background box
      opacity: 0.8, // Full opacity
      textShadow: `0px 0px 15px rgba(0, 0, 0, 0.1)`, // Outline glow effect for the text
      borderRadius: '10px', // Rounded corners for the background box
    };

    return (
      <div
        id="home"
        style={{
          position: "relative", // Set relative position for containing absolutely positioned text
          display: "flex",
          height: "100vh",
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
        }}
        className="bgstyle text-light m-0"
      >
        {/* Overlay Text */}
        {/* <Typist> */}
        <h1 ref={ref} style={textOverlayStyle} className='roboto-mono-title'>
          GALLERY
        </h1>
        {/* </Typist> */}

        <div
          style={{
            flex: 1,
            background: `url(${leftImage[leftImageIndex]}) center/cover no-repeat`,
            backgroundSize: "cover",
            ...fadeStyle,
            ...(leftImageVisible ? {} : hiddenStyle),
          }}
        ></div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              flex: 1,
              background: `url(${topRightImage[topRightImageIndex]}) center/cover no-repeat`,
              backgroundSize: "cover",
              ...fadeStyle,
              ...(topRightImageVisible ? {} : hiddenStyle),
            }}
          ></div>

          <div
            style={{
              flex: 1,
              background: `url(${bottomRightImage[bottomRightImageIndex]}) center/cover no-repeat`,
              backgroundSize: "cover",
              ...fadeStyle,
              ...(bottomRightImageVisible ? {} : hiddenStyle),
            }}
          ></div>
        </div>
      </div>
    );
  }
);

export default GalleryBody;
