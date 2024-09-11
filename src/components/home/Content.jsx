import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Ensure you're using Bootstrap
import { Jumbotron } from './migration';

const Content = ({ heading }) => {
  const [youtubeLinks, setYoutubeLinks] = useState([]); // Initialize as an empty array

  useEffect(() => {
    // Fetch YouTube links from the backend
    fetch('http://localhost:5000/api/urls')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Set youtubeLinks from the `urls` array in the JSON
        if (data && Array.isArray(data.urls)) {
          setYoutubeLinks(data.urls);
          console.log(youtubeLinks);
        } else {
          console.error('Unexpected data format', data);
        }
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []); // Empty dependency array ensures the fetch runs once when the component mounts

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container>
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row className="justify-content-center">
          {/* Map through YouTube links and display two embedded videos per row */}
          {youtubeLinks.length > 0 ? (
            youtubeLinks.map((link, index) => (
              <Col xs={12} md={6} key={index} className="mb-4">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src={`https://www.youtube.com/embed/${extractVideoId(link)}`}
                    allowFullScreen
                    title={`YouTube video ${index + 1}`}
                  ></iframe>
                </div>
              </Col>
            ))
          ) : (
            <p>No YouTube videos available</p>
          )}
        </Row>
      </Container>
    </Jumbotron>
  );
};

// Function to extract the video ID from a YouTube URL
const extractVideoId = (url) => {
  try {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('v'); // Extract the video ID from the URL
  } catch (error) {
    console.error('Invalid YouTube URL', url);
    return null; // Handle invalid URL
  }
};

export default Content;
