import React from "react";

// Components of the page
import MainBody from '../components/home/MainBody.jsx'
import AboutMe from "../components/home/AboutMe.jsx";
import Brands from "../components/home/Brands.jsx";
import Contact from "../components/home/Contact.jsx"

// Configuration variables
import {
    notFound, mainBody
  } from '../editable-stuff/config.js'

const NotFound = React.forwardRef((props, ref) => {
    return (
      <>
        {/* Main body / Hero Section */}
        <MainBody
          gradient={mainBody.gradientColors}
          title={notFound.heading}
          message={notFound.message}
          icons={mainBody.icons}
          ref={ref}
        />
      </>
    );
});

// Exporting the home page
export default NotFound;
