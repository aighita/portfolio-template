import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';

// Components to use/build on top of
import { Jumbotron } from "./migration";

const Brands = ({ heading }) => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    // Fetch logos from the backend
    fetch('http://localhost:5000/api/brands')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setLogos(data);  // Set logos state
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);  // Empty dependency array ensures the fetch runs once when the component mounts

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container>
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row className="justify-content-center">
          {/* If logos array is empty, display a message */}
          {logos.length === 0 ? (
            <p style={{ textAlign: "center" }}>No logos to display... <br></br> 
                                            Folder empty or back-end server down <br></br>
                                            </p>
          ) : (
            // Map through the logos and display them in 3-per-row format
            logos.map((logo, index) => (
              <Col key={index} xs={12} sm={4} className="d-flex justify-content-center mb-4">
                <img src={logo} alt={`Brand logo ${index + 1}`} className="img-fluid logo-image" />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Brands;
