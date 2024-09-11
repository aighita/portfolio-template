import React from "react";

// Routing multiple pages. Each path to page
// "/" => Home.jsx
// "/mywork" => MyWork.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Configuration variables
import {
  navBar,
  mainBody,
  getInTouch,
} from "./editable-stuff/config.js";

// Navigation
import Navbar from "./components/Navbar";

// PAGES
import Home from "./pages/Home.jsx"

// Other components
import MainBody from "./components/home/MainBody";
import GetInTouch from "./components/home/GetInTouch.jsx";

// Footer
import Footer from "./components/Footer";

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
