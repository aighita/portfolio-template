import React from "react";

// Components of the page
import MainBody from '../components/home/MainBody.jsx'
import AboutMe from "../components/home/AboutMe.jsx";
import Brands from "../components/home/Brands.jsx";

// Configuration variables
import {
    mainBody,
    about,
  } from '../editable-stuff/config.js'

  const MyWork = React.forwardRef((props, ref) => {
    return (
      <>
        {mainBody.show && (
          <MainBody
          // gradient={mainBody.gradientColors2}
          backgroundPhoto ={mainBody.imagineMyWork}
          title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
          message={"MY WORK"}
          icons={mainBody.icons}
          ref={ref}
        />
        )}
      </>
    );
  });

// Exporting the home page
export default MyWork;
