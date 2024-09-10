import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
// import {
//   navBar,
//   mainBody,
//   about,
//   repos,
//   leadership,
//   skills,
//   getInTouch,
//   experiences
// } from "../../editable-stuff/config.js";
// import MainBody from "./MainBody";

const Project = ({ heading, username, length, specfic, ref }) => {
   
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      {/* <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={"MESAJUL MEU"}
        icons={mainBody.icons}
        ref={ref}
      /> */}
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {/* TODO: Add logos of brands 3-per row located inside public/brands */}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
