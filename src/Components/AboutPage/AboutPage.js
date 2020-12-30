import React, { Component } from 'react';
import './AboutPage.css';
import {Container, Row, Col, Image} from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar';
import ContactBar from '../../Components/ContactBar/ContactBar';
import uglyBitch from '../../Assets/ugly_bitch.png';
import uglyBitches from '../../Assets/ugly_bitches.png';
import USC from '../../Assets/USC.png';
import AYS from '../../Assets/AYS.png';
import PCC from '../../Assets/PCC.png';
import CHH from '../../Assets/CHH.png';
import Fade from 'react-reveal';


class AboutPage extends Component {
  render() {
    return (
      <Container fluid className="web">
        <Row className="banner"> 
          <Col>
            <Navbar/>
              <Row>
                <Col lg={6} className="d-flex flex-column">
                  <div className="banner_header align-self-center">
                    <h1 className="banner_title">
                        <Fade distance={"150px"} left>
                            AUDREY KATO
                        </Fade>
                    </h1>
                    <p className="banner_subtitle">
                        <Fade distance={"150px"} left>
                            I am a student at the University of Southern California ready to make an impact in the public relations field.  
                        </Fade>
                    </p>
                  </div>
                </Col>
                <Col lg={6} className="d-flex justify-content-center">
                    <Fade right distance={"150px"}>
                        <img src={uglyBitch} className="ugly_bitch"/>
                    </Fade>
                </Col>
              </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="about_text">
              About Me
            </p>
          </Col>
        </Row>
         <Row>
          <Col md={4}>
            <p className="my_text">
              My Education
            </p>
            <Row>
              <Col>
                <div className="pink_rectangle">
                  <p className="reg_text">
                    I am a <a href="https://pasadena.edu"><b><u>Pasadena City College</u></b></a> alumni with an <a href="https://pasadena.edu/academics/degrees-and-certificates/aa-degrees/social-and-behavioral-sciences.php"><b><u>Associate Degree in Arts, Social Science and Behavioral Science</u></b></a>. In the Fall of 2020, I transferred to the <a href="https://www.usc.edu"><b><u>University of Southern California</u></b></a>.  I am currently pursuing a degree in <a href="https://annenberg.usc.edu/journalism/undergraduate-public-relations"><b><u>Public Relations</u></b></a> in one of the best programs in the nation.  This program focuses on building fundamental skills to comprehensively run public relation campaigns while creating innovative multi-platform content. I am looking forward to learning more skills with the amazing professors and program at USC! 
                  </p>
                  <Row>
                    <Col className="d-flex justify-content-center">
                        <a href="https://pasadena.edu">
                            <img src={PCC} className="PCC"/>
                        </a>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <a href="https://www.usc.edu">
                            <img src={USC} className="USC"/>
                        </a>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <p className="my_text">
              My Career Journey
            </p>
            <Row>
              <Col>
                <div className="journey_rectangle">
                  <p className="reg_text">
                    My career journey started at the age of 17 when I established myself as a professional harpist. I was able to market services and gain a large clientele in the Southern California Area. In the summer of 2017, I was an intern at  <a href="http://www.chhllp.com"><b><u>CHH, Law, PC</u></b></a>. I managed case files and performed many administrative duties as well. My career in public relations did not begin until the summer of 2019. I was given the opportunity to work as the public relations intern at the <a href="https://www.aysymphony.org"><b><u>American Youth Symphony</u></b></a>. My task ranged from writing press releases, to designing various marketing materials. This resulted in my decision to pursue a career and education in public relations.
                  </p>
                  <Row>
                    <Col>
                        <a href="http://www.chhllp.com">
                            <img src={CHH} className="CHH"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.aysymphony.org">
                            <img src={AYS} className="AYS"/>
                        </a>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <p className="my_text">
              My Interests
            </p>
            <Row>
              <Col>
                <div className="pink_rectangle">
                  <p className="reg_text">
                    I enjoy traveling with my friends, spending time with my family and creating content. Though I rarely have free time, I look forward to the moments I can spend with my family and friends. From camping on the streets in New York City to watch Saturday Night Live, to surfing in Hawaii, my friends and I love traveling. I also treasure every moment I spend with my seventeen cousins and eighteen aunts and uncles. Family holidays are some of the best memories I can remember. 
                  </p>
                  <img src={uglyBitches} className="ugly_bitches"/>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <ContactBar />
      </Container>
    );
  }
}

export default AboutPage;
