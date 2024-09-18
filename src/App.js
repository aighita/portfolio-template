import React from "react";

// Routing multiple pages. Each path to page
// "/" => Home.jsx
// "/mywork" => MyWork.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Configuration variables
import {
  navBar,
  footer
} from "./editable-stuff/config.js";

// Navigation
import Navbar from "./components/Navbar.jsx";

// PAGES
import Home from "./pages/Home.jsx"
import MyWork from "./pages/MyWork.jsx";
import Gallery from "./pages/Gallery.jsx";
import Campaigns from "./pages/Campaigns.jsx";
import MusicVideos from "./pages/MusicVideos.jsx";
// import Photoshoot from "./pages/Photoshoot.jsx";
import NotFound from "./pages/NotFound.jsx";

// Footer
import Footer from "./components/Footer.jsx";


const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}                                  {/* NAVIGATION BAR */}

      {/* URL PAGE ROUTING */}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />                {/* HOME           */}
        <Route path="/my-work" element={<MyWork ref={titleRef}/>} />              {/* MY WORK        */}
        <Route path="/gallery" element={<Gallery ref={titleRef}/>} />             {/* GALLERY        */}
        <Route path="/campaigns" element={<Campaigns ref={titleRef}/>} />         {/* CAMPAIGNS      */}
        <Route path="/music-videos" element={<MusicVideos ref={titleRef}/>} />    {/* MUSIC VIDEOS   */}
        <Route path="*" element={<NotFound />} />                                 {/* 404 PAGES      */}
      </Routes>
  
      {footer.show && <Footer/>}                                                  {/* FOOTER         */}
    </BrowserRouter>
  );
};

export default App;
