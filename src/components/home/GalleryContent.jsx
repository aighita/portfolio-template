import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Jumbotron } from './migration.jsx';
import PhotoshootCard from './PhotoshootCard.jsx';

const GalleryContent = () => {
  const [galleryData, setGalleryData] = useState({}); // Initialize as an empty object for gallery data

  useEffect(() => {
    // Fetch folder names and image data from the backend
    fetch('http://localhost:5000/api/gallery')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Set galleryData from the response if it's an object
        if (data && typeof data === 'object') {
          setGalleryData(data);
          console.log(data);
        } else {
          console.error('Unexpected data format', data);
          console.log(data);
        }
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []); // Empty dependency array ensures the fetch runs once when the component mounts

  // Extract the folder names
  const folderNames = Object.keys(galleryData);

  // Function to handle card click and open in new tab
  const handleCardClick = (folderName) => {
    console.log(`Card for folder ${folderName} clicked!`); // Debugging line
    window.open(`/${folderName}`, '_blank'); // Open in a new tab
  };
  

  return (
    <Jumbotron
      fluid
      id="projects"
      className="custom-bg-dark"
      style={{
        background: 'rgba(34, 34, 34)',
      }}
    >
      <Container>
        <Row className="justify-content-center">
          {/* Map through folder names and display a PhotoshootCard for each folder */}
          {folderNames.length > 0 ? (
            folderNames.map((folder, index) => (
              <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
                <PhotoshootCard
                  folderName={folder} // Pass folder name to PhotoshootCard
                  images={galleryData[folder]} // Pass array of images to PhotoshootCard
                  onClick={() => handleCardClick(folder)} // Handle click to open new tab
                />
              </Col>
            ))
          ) : (
            <p>No gallery content available</p>
          )}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default GalleryContent;
