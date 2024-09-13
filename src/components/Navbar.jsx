import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills, musicVideos, gallery } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  if (!ref.current) 
    ref.current = 0;

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 ms-auto fixed-top ${!isTop ? "navbar-black" : "navbar-transparent"
        }`}
      expand={false}
    >

      {/* LEFT SIDE LOGO */}
      {/* <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`| Nedal |`}
      </Navbar.Brand> */}
 
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />

      {/* DIFFERENT PAGES ROUTING */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav ms-auto">
            <NavLink
              href={process.env.PUBLIC_URL + "/"}
            >
              Home
            </NavLink>
          {repos.show && (
            <NavLink
              href={process.env.PUBLIC_URL + "/my-work"}
            >
              My Work
            </NavLink>
          )}
          {gallery.show && (
            <NavLink
              href={process.env.PUBLIC_URL + "/gallery"}
            >
              Gallery
            </NavLink>
          )}
          {true && (
            <NavLink
              href={process.env.PUBLIC_URL + "/campaigns"}
            >
              Campaigns
            </NavLink>
          )}
          {musicVideos.show && (
            <NavLink
              href={process.env.PUBLIC_URL + "/music-videos"}
            >
              Music Videos
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
});

export default Navigation;
