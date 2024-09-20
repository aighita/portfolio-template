import React, { useState, useRef, useEffect } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition.js";
import useResizeObserver from "../hooks/useResizeObserver.js";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills, musicVideos, gallery } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration.jsx";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  if (!ref.current) ref.current = 0; // Initialize ref if null

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions || !ref.current) return; // Guard check to avoid null
      
      const offsetTop = ref.current.offsetTop; // Safely access offsetTop
      const newIsTop = currPos.y + offsetTop - navbarDimensions.bottom > 5;
      setIsTop(newIsTop);
      setScrollPosition(currPos.y);
    },
    [navBottom, ref, navbarDimensions] // Ensure dependencies include ref
  );

  useEffect(() => {
    if (!navbarDimensions || !ref.current) return; // Guard check

    const offsetTop = ref.current.offsetTop; // Safely access offsetTop
    const newIsTop = navBottom - scrollPosition >= offsetTop;
    setIsTop(newIsTop);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 ms-auto fixed-top ${!isTop ? "navbar-black" : "navbar-transparent"}`}
      expand={false}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav ms-auto">
          <NavLink href={process.env.PUBLIC_URL + "/"}>Home</NavLink>
          {repos.show && <NavLink href={process.env.PUBLIC_URL + "/my-work"}>My Work</NavLink>}
          {gallery.show && <NavLink href={process.env.PUBLIC_URL + "/gallery"}>Gallery</NavLink>}
          {true && <NavLink href={process.env.PUBLIC_URL + "/campaigns"}>Campaigns</NavLink>}
          {musicVideos.show && <NavLink href={process.env.PUBLIC_URL + "/music-videos"}>Music Videos</NavLink>}
        </Nav>
      </Navbar.Collapse>

      <div className="ms-auto">
        {mainBody.icons.map((icon, index) => (
          <a
            key={`social-icon-${index}`}
            target="_blank"
            rel="noopener noreferrer"
            href={icon.url}
            aria-label={`My ${icon.image.split("-")[1]}`}
          >
            <i className={`fab ${icon.image} fa-2x socialicons`} />
          </a>
        ))}
      </div>
    </Navbar>
  );
});

export default Navigation;
