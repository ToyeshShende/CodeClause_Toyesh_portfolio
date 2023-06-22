
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/crop.jpg";



export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
           
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>"Hi! I'm Toyesh Shende" </h1>
                  <p>I am final year student at VIIT,Pune and pursuing computer engineering. I am interest in full stack development and currently learning it and trying to implement mern stack on projects. Also I liked to solve questions of dsa in cpp which helps me to imrove my problem solving and critical thinking skills. About the competative coding I have 1623 rating on CodeChef.Other than study ,i like to play cricket on my free time.</p>

          </Col>
          <Col xs={12} md={6} xl={5}>
           
                  <img src={headerImg} alt="Header Img"/>
    
          </Col>
        </Row>
      </Container>
    </section>
  )
}
