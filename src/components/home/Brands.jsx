import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from 'react-bootstrap';

// Components to use/build on top of
import { Jumbotron } from "./migration";

const Brands = ({ heading, logos }) => {
  fetch('http://localhost:5000/api/brands')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Assuming the API returns an array of logo paths
      logos = data;
      console.log(logos);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
        {/* If logos array is empty, display a message */}
        {logos.length === 0 ? (
          <p style={{justifyContent: "space-around"}}>No logos to display. Folder is empty.</p>
        ) : (
          // Map through the logos and display them in 3-per-row format
          logos.map((logo, index) => (
            <Col key={index} xs={12} sm={4} className="mb-4">
              <img src={logo} alt={`Brand logo ${index + 1}`} className="img-fluid" />
            </Col>
          ))
        )}
      </Row>
      </Container>
    </Jumbotron>
  );
};

export default Brands;
