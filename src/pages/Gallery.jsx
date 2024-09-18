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
          ref={ref}
        >
        </GalleryBody>
      )}
      {/* Content Section */}
      {gallery.show && <GalleryContent />}
    </>
  );
});

export default Gallery;
