import React from "react";

// Components of the page
import MainBody from '../components/home/MainBody.jsx'
import AboutMe from "../components/home/AboutMe.jsx";
import Brands from "../components/home/Brands.jsx";

// Configuration variables
import {
    mainBody,
    about,
    brands
  } from '../editable-stuff/config.js'

  const Home = React.forwardRef((props, ref) => {
    return (
      <>
        {/* Main body / Hero Section */}
        <MainBody
          gradient={mainBody.gradientColors}
          title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
          message={mainBody.message}
          icons={mainBody.icons}
          ref={ref}
        />
        {/* About section */}
        {about.show && (
          <AboutMe
            heading={about.heading}
            message={about.message}
            link={about.imageLink}
            imgSize={about.imageSize}
            resume={about.resume}MESAJU
          />
        )}
        {/* Brands that trusted me */}
        {brands.show && (
          <Brands 
            heading={brands.heading}
            // logos={brands.logos}
          />
        )}
      </>
    );
  });

// Exporting the home page
export default Home;
