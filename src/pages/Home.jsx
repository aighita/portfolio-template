import React from "react";

// Components of the page
import MainBody from '../components/MainBody.jsx'
import AboutMe from "../components/home/AboutMe.jsx";
import Brands from "../components/home/Brands.jsx";

// Configuration of the components
import {
    mainBody,
    about,
    brands
  } from '../editable-stuff/config.js'

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      {mainBody.show && (
        <MainBody
          gradient={mainBody.gradientColors}
          title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
          message={mainBody.message}
          icons={mainBody.icons}
          ref={ref}
        />
      )}
      
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}MESAJU
        />
      )}
      {brands.show && (
          <Brands
            heading={brands.heading}
            // message={brands.message}
          />
      )}
    </>
  );
});

export default Home;
