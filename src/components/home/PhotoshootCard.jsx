import React from 'react';
import { Card } from 'react-bootstrap'; // Assuming you are using Bootstrap for styling
// import './PhotoshootCard.css'; // Custom styles for hover effects

const PhotoshootCard = ({ folderName, images }) => {
    // Concatenate folderName with the first image filename to create the full path for the card image
    const firstImagePath = images.length > 0 ? `/gallery/${folderName}/${images[0]}` : null;

    return (
        <div className="photoshoot-card-container">
            <Card className="photoshoot-card bg-dark"> 
                <div className="image-container">
                    {firstImagePath ? (
                        <div className="photoshoot-image-wrapper">
                            <img src={firstImagePath} alt={`${folderName} cover`} className="photoshoot-image" />
                        </div>
                    ) : (
                        <div className="no-image-placeholder">No image available</div>
                    )}
                    <div className="photoshoot-text-overlay">
                        <h4 className="photoshoot-title">{folderName.toUpperCase()}</h4>
                        <p className="photoshoot-text">{images.length} photos available</p>
                    </div>
                    <div className="photoshoot-overlay">
                        <span className="arrow">&#8594;</span> {/* Arrow that appears on hover */}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default PhotoshootCard;
