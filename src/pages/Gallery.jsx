import React from 'react'

// Components
import GalleryBody from '../components/home/GalleryBody.jsx'
import GalleryContent from '../components/home/GalleryContent.jsx';

// Configuration variables
import { gallery }  from "../editable-stuff/config.js"

const Gallery = React.forwardRef((props, ref) => {

  return (
    <>
      {gallery.show && (
        <GalleryBody
          leftImage={gallery.leftImage}
          topRightImage={gallery.topRightImage}
          bottomRightImage={gallery.bottomRightImage}
          
        >
          
        </GalleryBody>
      )}
      {/* Content Section */}
      {true && <GalleryContent />}
    </>
  );
});

export default Gallery;
