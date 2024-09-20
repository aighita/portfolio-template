import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { Jumbotron } from '../home/migration.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Correctly importing faTimes

const PhotoshootContent = ({ folderName, photosPaths }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [likedPhotos, setLikedPhotos] = useState({});

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft' && selectedImageIndex > 0) {
        handlePrev();
      } else if (event.key === 'ArrowRight' && selectedImageIndex < photosPaths.length - 1) {
        handleNext();
      } else if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal, selectedImageIndex, photosPaths.length]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handlePrev = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex < photosPaths.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const toggleLike = (photoId) => {
    setLikedPhotos(prev => ({
      ...prev,
      [photoId]: !prev[photoId]
    }));
  };

  return (
    <Jumbotron fluid
        id="projects"
        className="custom-bg-dark"
        style={{
        background: 'rgba(34, 34, 34)',
        }}
    >
      <Container>
        <Row className="justify-content-center">
          {photosPaths.length > 0 ? (
            photosPaths.map((photoFilename, index) => (
              <Col xs={6} sm={4} md={3} lg={2} key={index} className="mb-4">
                <div className="image-wrapper" onClick={() => handleImageClick(index)}>
                  <img
                    src={`/gallery/${folderName}/${photoFilename}`}
                    alt={`${folderName} ${index}`}
                    className="gallery-image img-fluid"
                  />
                </div>
              </Col>
            ))
          ) : (
            <p>No photos to display.</p>
          )}
        </Row>
      </Container>

      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName="full-screen-modal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Body className="p-0 bg-dark">
          <Button variant="link" className="position-absolute text-white" style={{ top: '10px', left: '10px', zIndex: 1051 }} onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </Button>
          {selectedImageIndex > 0 && (
            <Button variant="link" className="position-absolute text-white" style={{ top: '50%', left: '10px', zIndex: 1051, fontSize: '2rem' }} onClick={handlePrev}>
              {'<'}
            </Button>
          )}
          {selectedImageIndex < photosPaths.length - 1 && (
            <Button variant="link" className="position-absolute text-white" style={{ top: '50%', right: '10px', zIndex: 1051, fontSize: '2rem' }} onClick={handleNext}>
              {'>'}
            </Button>
          )}
          <img
            src={`/gallery/${folderName}/${photosPaths[selectedImageIndex]}`}
            alt="Selected"
            style={{ maxHeight: '90vh', maxWidth: '90vw', display: 'block', margin: 'auto' }}
            onClick={handleClose}
          />
          <Button variant="link" className="position-absolute text-danger" style={{ bottom: '10px', right: '10px', zIndex: 1051 }} onClick={() => toggleLike(photosPaths[selectedImageIndex])}>
            <FontAwesomeIcon icon={likedPhotos[photosPaths[selectedImageIndex]] ? faHeartSolid : faHeartRegular} size="2x" />
          </Button>
        </Modal.Body>
      </Modal>
    </Jumbotron>
  );
};

export default PhotoshootContent;
