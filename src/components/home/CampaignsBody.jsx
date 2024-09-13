import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";

const CampaignsBody = React.forwardRef(
  ({ videoPath }, ref) => {
    const textOverlayStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2, // Ensure the text is on top of the images
      color: "white",
      textAlign: "center",
      fontSize: "10rem",
      fontWeight: "bold",
      opacity: 0.6, // Almost transparent text
      mixBlendMode: "exclusion", // Special outline effect
      textShadow: `0px 0px 15px rgba(0, 0, 0, 0.9)`, // Create a strong outline glow effect
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
        <div style={textOverlayStyle}>
          GALLERY
        </div>

        {/* TODO:  */}
      </div>
    );
  }
);

export default CampaignsBody;