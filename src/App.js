import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  getInTouch,
} from "./editable-stuff/config.js";

import Navbar from "./components/Navbar";

import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import GetInTouch from "./components/home/GetInTouch.jsx";

import Footer from "./components/Footer";

// import Home from "./pages/Home.jsx"

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
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

const MyWork = React.forwardRef((props, ref) => {
  return (
    <>
      {mainBody.show && (
        <MainBody
        // gradient={mainBody.gradientColors2}
        backgroundPhoto ={mainBody.imagineMyWork}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={"mYwork"}
        icons={mainBody.icons}
        ref={ref}
      />
      )}
    </>
  );
});


const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
        <Route path="/projects" element={<MyWork ref={titleRef}/>} />
        <Route path="*" element={<Home />} />
      </Routes>
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
