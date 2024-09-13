import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#0b0322" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/aighita"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Iulian Ghita
          </span>
        </a>{" & "}
        <a
          rel="noopener"
          href="https://github.com/baldvoicu"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Vlad Voicu
          </span>
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
