import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// Components to use/build on top of
import { Jumbotron } from "./migration";

const Brands = ({ heading, username, length, specfic, ref }) => {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    // Fetch the content from the Node.js server
    fetch('http://localhost:5000/api/brands')
        .then((response) => response.json())
        .then((data) => {
            console.log('Fetched URLs:', data); // Log the paths to the console for debug
            setUrls(data); // Set the paths data in state
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
  }, []);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {/* TODO: Add logos of brands 3-per row.
            Fetch paths of logos from "localhost:5000/api/brands"
          */}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Brands;
