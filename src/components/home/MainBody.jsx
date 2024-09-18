import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ title }, ref) => {
    const [backgroundPhotos, setBackgroundPhotos] = useState([]); // Initialize as an array
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null); // Add error state

    useEffect(() => {
      // Fetch the array of photo paths from the backend API
      const fetchBackgroundPhotos = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/mainbody-bg");
          const data = await response.json();

          // Ensure the data is an array before updating state
          if (Array.isArray(data)) {
            setBackgroundPhotos(data);
            console.log(data);
          } else {
            throw new Error("API did not return an array");
          }
        } catch (err) {
          setError(err.message);
          console.error("Error fetching background photos:", err);
        } finally {
          setLoading(false); // Set loading to false after fetching
        }
      };

      fetchBackgroundPhotos();
    }, []);

    // Updated text overlay style for "MAIN BODY"
    const textOverlayStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
      color: "white",
      textAlign: "center",
      fontSize: "35vw",
      padding: '20px',
      opacity: 1,
      textShadow: `0px 0px 15px rgba(0, 0, 0, 0.5)`,
      borderRadius: '10px',
    };

    // Grid container style
    const gridContainerStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(9, 1fr)", // 3 columns
      gridGap: "10px",
      width: "100%",
      height: "100%", // Ensure grid takes up full height
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1, // Ensure the grid is behind the text
      background: "rgb(0, 0, 0, 1)",
    };

    // Individual image style
    const imageStyle = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    };

    // Handle loading and error states
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <Jumbotron
        fluid
        id="home"
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        {/* Grid background with fetched images */}
        <div style={gridContainerStyle}>
          {backgroundPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Background ${index + 1}`}
              style={imageStyle}
            />
          ))}
        </div>

        <Container className="text-center">
          <h1 ref={ref} style={textOverlayStyle} className="roboto-mono-title">
            {/* {title} */} NEDAL
          </h1>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
