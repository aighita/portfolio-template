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
import Navbar from "./components/Navbar.jsx";

// PAGES
import Home from "./pages/Home.jsx"
import MyWork from "./pages/MyWork.jsx";
import MusicVideos from "./pages/MusicVideos.jsx";

// Other components
import GetInTouch from "./components/home/GetInTouch.jsx";

// Footer
import Footer from "./components/Footer.jsx";


const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
        <Route path="/my-work" element={<MyWork ref={titleRef}/>} />
        <Route path="/music-videos" element={<MusicVideos ref={titleRef}/>} />
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
