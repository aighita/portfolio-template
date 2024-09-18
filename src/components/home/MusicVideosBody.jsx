import React from 'react';
// import Container from "react-bootstrap/Container";

const MusicVideosBody = React.forwardRef(({ videoPath }, ref) => {
  const textOverlayStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2, // Ensure the text is on top of the video
    color: "white",
    textAlign: "center",
    fontSize: "8rem",
    // fontWeight: "bold",
    opacity: 0.9, // Almost transparent text
    mixBlendMode: "exclusion", // Special outline effect
    textShadow: `0px 0px 15px rgba(0, 0, 0, 0.9)`, // Create a strong outline glow effect
  };

  const videoStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(90deg)", // Rotate the video by 90 degrees
    width: "100vh", // Since the video is 9:16, we use the height of the container as width
    height: "100vw", // Use the width of the container as height
    objectFit: "cover", // Ensures the video covers the entire area
    zIndex: 1, // Make sure the video is behind the text
    opacity: 1, // Optional: add some transparency to the video
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  };

  return (
    <div
      id="home"
      style={{
        position: "relative", // Set relative position for containing absolutely positioned text and video
        display: "flex",
        height: "100vh", // Set the container height to full viewport height
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        overflow: 'hidden', // Ensure no overflow
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
        // loop
        muted
        playsInline // Ensure compatibility with mobile devices
        src={videoPath ? videoPath : "preview2.mp4"} // Directly reference video from public folder
      />
    </div>
  );
});

export default MusicVideosBody;
