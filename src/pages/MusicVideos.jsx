import React from 'react'

// Components
import MainBody from '../components/home/MainBody.jsx'
import AboutMe from "../components/home/AboutMe.jsx";
import Brands from "../components/home/Brands.jsx";

// Configuration variables
import { mainBody, musicVideos }  from "../editable-stuff/config.js"

const MusicVideos = React.forwardRef((props, ref) => {
    return (
        <>
        {musicVideos.show && (
          <MainBody
          gradient={mainBody.gradientColors2}
        //   backgroundPhoto ={mainBody.imagineMyWork}
          title={musicVideos.heading}
          message={musicVideos.message}
          icons={mainBody.icons}
          ref={ref}
        />
        )}
        {true && (
          <Brands 
          />
        )}
      </>
    );
});

export default MusicVideos;
