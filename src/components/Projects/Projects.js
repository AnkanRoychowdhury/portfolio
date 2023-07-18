import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import protein from "../../Assets/Projects/protein.jpg";
import sortingvis from "../../Assets/Projects/sortingvis.svg";
import portfolio from "../../Assets/Projects/portfolio.svg";
import texibition from "../../Assets/Projects/texibition.svg";
import ezeptkart from "../../Assets/Projects/ezeptkart.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={texibition}
              isBlog={false}
              title="Texibition 2K23"
              description="Texibition 2k23, website for My college Brainware University's official Tech Fest. This page build with React,Material UI framework."
              ghLink="https://github.com/AnkanRoychowdhury/Texibition2k23"
              demoLink="https://texibition2k23.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ezeptkart}
              isBlog={false}
              title="E-ZeptKart - Flipkart Clone"
              description="E-ZeptKart's frontend build with React & Material UI framework also used Redux for scalable state management. Backend is built using Node Js & express. Also all the data are dynamically fetched from MongoDB. Dynamic Data operations made possible using REST API."
              ghLink="https://github.com/AnkanRoychowdhury/E-ZeptKart"
              demoLink="https://ezeptkart-ecom.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Personal Portfolio built with React & React Bootstrap.Here I have listed my personal projects, skills, experiences. Also I have added Resume Part where I have showcased my updated Resume."
              ghLink="https://github.com/AnkanRoychowdhury/portfolio"
              demoLink="https://ankan-dev.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={protein}
              isBlog={false}
              title=" Protein Sequence Classification"
              description="Developed a BILSTM model using the 'Keras' library to analyze protein feature values and predict protein family names. I was able to achieve an accuracy of 81% ."
              ghLink="https://github.com/AnkanRoychowdhury/BI-LSTM"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sortingvis}
              isBlog={false}
              title="Sorting Visualizer"
              description="Sorting Visualizer application where anyone can generate an array and select a sorting algorithm like Merge Sort, Insertion Sort, Selection Sort etc. and it will sort the array step by step which can be beneficial to understand the Sorting Techniques."
              ghLink="https://github.com/AnkanRoychowdhury/Sorting-Visualizer"
              demoLink="https://sorting-visualizer-ankan.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
