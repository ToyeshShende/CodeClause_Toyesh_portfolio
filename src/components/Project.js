import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/Exercise - Google Chrome 20-06-2023 19_52_28.png";
import projImg2 from "../assets/images/Exercise - Google Chrome 20-06-2023 19_32_34.png";
import projImg3 from "../assets/images/Exercise - Google Chrome 20-06-2023 19_31_19.png";
import colorSharp2 from "../assets/images/color-sharp.png";
import otherImg1 from "../assets/images/Project.js - toyesh_portfolio - Visual Studio Code 20-06-2023 22_12_19 (1).jpg"
import certificateImg1 from "../assets/images/gfg.png"
import certificateImg2 from "../assets/images/Untitled - Google Chrome 21-06-2023 18_49_30.png"
import certificateImg3 from "../assets/images/sql.png"
import "animate.css";
import otherprojImg3 from "../assets/images/C__React js files_toyesh_portfolio_src_assets_images 21-06-2023 23_41_34.png"
import otherImg2 from "../assets/images/ml.png"
export const Projects = () => {
  const projects = [
    {
      title: "BLOG APP",
      description:
        "created using mern stack and has password encryption based register,create post feature,edit post feature only access to the author",
      imgUrl: projImg1,
    },
    {
      title: "Gym Exercise",
      description: "An react app which fetch exercise from an api exercise are tag based can be search by name or by body tag has utube api for similar exercises video",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio Website",
      description: "An react based responsive website which has navbar,banner,projects,contact section made from scratch and has use of advance css for beautiful ui",
      imgUrl: projImg3,
    },
    
    
  ];

  const otherProjects = [
    {
      title: "Space invader Game",
      description: "A python based game made using py-game library",
      imgUrl: otherImg1,
    },
    {
      title: "Multiple deseases",
      description: "A machine learning project with user interface",
      imgUrl: otherImg2,
    },
    {
      title: "Ecommerce DashBoard",
      description: "Other Project Description",
      imgUrl: otherprojImg3,
    },
  ];

  const certificates = [
    {
      title: "Certificate 1",
      description: "gfg dsa course",
      imgUrl: certificateImg1,
    },
    {
      title: "Certificate 2",
      description: "Hacker rank python basic",
      imgUrl: certificateImg2,
    },
    {
      title: "Certificate 3",
      description: "Hacker rank sql basic",
      imgUrl: certificateImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>PROJECTS</h2>
            <p>
              All Projects Source Code is Available at My Github Profile. You Can Hover To Get The Project Info and
              Click To Open the Deployed Link Of Project
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">DEVELOPMENT</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">OTHER</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">CERTIFICATES</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {otherProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {certificates.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
