import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Ensure you're using Bootstrap
import { Jumbotron } from '../home/migration.jsx';

const Content = () => {
  const [videoPaths, setVideoPaths] = useState([]); // Initialize as an empty array

  useEffect(() => {
    // Fetch video paths from the backend
    fetch('http://localhost:5000/api/campaigns')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Set videoPaths from the returned data
        if (data && Array.isArray(data)) {
          setVideoPaths(data);
          console.log(data);
        } else {
          console.error('Unexpected data format', data);
        }
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []); // Empty dependency array ensures the fetch runs once when the component mounts

  return (
    <Jumbotron fluid id="projects" className="bg-dark m-0">
      <Container>
        {/* Display video grid with 4 videos per row */}
        <Row className="justify-content-center">
          {videoPaths.length > 0 ? (
            videoPaths.map((videoFilename, index) => (
              <Col xs={12} md={6} lg={3} key={index} className="mb-4">
                <div style={{ position: 'relative', paddingBottom: '177.78%', height: 0 }}>
                  <video
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    src={`./campaigns/${videoFilename}`} // Adjust this based on your server config
                    controls
                    title={`Campaign video ${index + 1}`}
                  ></video>
                </div>
              </Col>
            ))
          ) : (
            <p>No Campaigns Videos Available</p>
          )}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Content;
