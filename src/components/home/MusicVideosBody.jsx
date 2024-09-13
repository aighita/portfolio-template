import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";

const MusicVideosBody = React.forwardRef(
  ({ videoPath }, ref) => {
    const textOverlayStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2, // Ensure the text is on top of the video
      color: "white",
      textAlign: "center",
      fontSize: "8rem",
      fontWeight: "bold",
      opacity: 0.6, // Almost transparent text
      mixBlendMode: "exclusion", // Special outline effect
      textShadow: `0px 0px 15px rgba(0, 0, 0, 0.9)`, // Create a strong outline glow effect
    };

    const videoStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover", // Ensures the video covers the entire area
      zIndex: 1, // Make sure the video is behind the text
      opacity: 0.8, // Optional: add some transparency to the video
    };

    return (
      <div
        id="home"
        style={{
          position: "relative", // Set relative position for containing absolutely positioned text and video
          display: "flex",
          height: "100vh",
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
        }}
        className="bgstyle text-light m-0"
      >
        {/* Overlay Text */}
        <div style={textOverlayStyle}>
          MUSIC VIDEOS
        </div>

        {/* Background Video */}
        <video
          style={videoStyle}
          autoPlay
          loop
          muted
          playsInline // Ensure compatibility with mobile devices
          src={videoPath ? videoPath : `${process.env.PUBLIC_URL}/preview.mp4`} // Use the passed videoPath or a default
        />
      </div>
    );
  }
);

export default MusicVideosBody;
