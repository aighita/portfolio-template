import React from 'react';

// Components
import PhotoshootBody from '../components/body/PhotoshootBody.jsx';
import PhotoshootContent from '../components/content/PhotoshootContent.jsx'; // Import PhotoshootContent
import BackToTop from '../components/others/BackToTop.jsx';

// Configuration variables
import { Container } from 'react-bootstrap'; // Bootstrap for layout

const Photoshoot = React.forwardRef((props, ref) => {
  const { folderName, images } = props; // Destructure props for folderName and images

  console.log('Folder name: ' + folderName);
  console.log('Images: ' + images);

  const firstImagePath = images.length > 0 ? `/gallery/${folderName}/${images[0]}` : null; // Assuming first image is used for background

  return (
    <>
      <PhotoshootBody 
        title={folderName}  // Pass the folder name as title
        photoPath={firstImagePath}  // Pass the first image as the background photo
      />

      {/* TODO Completed: Use PhotoshootContent component instead of inline code */}
      <PhotoshootContent folderName={folderName} photosPaths={images} /> {/* Pass folderName and images */}

      <BackToTop/>
    </>
  );
});

export default Photoshoot;
