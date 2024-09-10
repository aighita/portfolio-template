import React from "react";

// Components of the page
import MainBody from '../components/MainBody.jsx'
import AboutMe from "../components/home/AboutMe.jsx";
// import Project from "../components/home/Project.jsx";

// Configuration of the component
import {
    mainBody,
    about,
    repos,
    experiences
  } from "./editable-stuff/config.js";

  const Home = React.forwardRef((props, ref) => {
    return (
      <>
        <MainBody
          gradient={mainBody.gradientColors}
          title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
          message={"Storytelling through every shot"}
          icons={mainBody.icons}
          ref={ref}
        />
        {about.show && (
          <AboutMe
            heading={about.heading}
            message={about.message}
            link={about.imageLink}
            imgSize={about.imageSize}
            resume={about.resume}MESAJU
          />
        )}
        {
          experiences.show && (
            <Experience experiences={experiences}/>
          )
        }
        {repos.show && (
          <Project
            heading={repos.heading}
            username={repos.gitHubUsername}
            length={repos.reposLength}
            specfic={repos.specificRepos}
          />
        )}
      </>
    );
  });

export default Home;
