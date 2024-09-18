import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "black", color: "white" };

  const linkStyle = { textDecoration: "none", color: "inherit" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center">
      <Container>
        {props.children}
        Powered by
        <a
          rel="noopener"
          href="https://github.com/aighita"
          aria-label="Github Profile"
          style={linkStyle}
        >
          <span className="badge bg-dark">Iulian Ghita</span>
        </a>{" "}
        &{" "}
        <a
          rel="noopener"
          href="https://github.com/baldvoicu"
          aria-label="Github Profilee"
          style={linkStyle}
        >
          <span className="badge bg-dark">Vlad Voicu</span>
        </a>
      </Container>
    </footer>
  );
};

export default Footer;