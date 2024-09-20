import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "../home/migration";

const PhotoshootBody = React.forwardRef(
  ({ title, photoPath }, ref) => {
    // Updated text overlay style for "PHOTOSHOOT BODY"
    const textOverlayStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
      color: "white",
      textAlign: "center",
      fontSize: "10vw",
      padding: "20px",
      opacity: 1,
      textShadow: `0px 0px 15px rgba(0, 0, 0, 0.5)`,
      borderRadius: "10px",
    };

    // Single background image style (full-screen)
    const backgroundImageStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 1, // Ensure it's behind the title
    };

    return (
      <Jumbotron
        fluid
        id="photoshoot"
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        {/* Single background image */}
        {photoPath && (
          <img
            src={photoPath}
            alt={`${title} background`}
            style={backgroundImageStyle}
          />
        )}

        <Container className="text-center">
          <h1 ref={ref} style={textOverlayStyle} className="roboto-mono-title">
            {title}
          </h1>
        </Container>
      </Jumbotron>
    );
  }
);

export default PhotoshootBody;
