import React from 'react'

// Components
import MainBody from '../components/home/MainBody.jsx'

// Configuration variables
import { mainBody, gallery }  from "../editable-stuff/config.js"
import Content from '../components/home/Content.jsx';

const Gallery = React.forwardRef((props, ref) => {
    return (
        <>
        {gallery.show && (
          <MainBody
          gradient={mainBody.gradientColors2}
        //   backgroundPhoto ={mainBody.imagineMyWork}
          title={gallery.heading}
          message={gallery.message}
          icons={mainBody.icons}
          ref={ref}
        />
        )}
        {true && (
          <Content />
        )}
      </>
    );
});

export default Gallery;
