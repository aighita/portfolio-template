import React from 'react';
import { Card } from 'react-bootstrap'; // Assuming you are using Bootstrap for styling

const PhotoshootCard = ({ folderName, images }) => {
    // Concatenate folderName with the first image filename to create the full path for the card image
    const firstImagePath = images.length > 0 ? `/gallery/${folderName}/${images[0]}` : null;

    return (
        <Card className="photoshoot-card"> 
            {firstImagePath ? (
                <Card.Img variant="top" src={firstImagePath} alt={`${folderName} cover`} />
            ) : (
                <div className="no-image-placeholder">No image available</div>
            )}
            <Card.Body>
                <Card.Title>{folderName}</Card.Title>
                <Card.Text>
                    {/* You can add additional text or details about the photoshoot here */}
                    {images.length} photos available
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PhotoshootCard;
