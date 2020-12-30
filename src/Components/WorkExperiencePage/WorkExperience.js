import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import '../../App.css';
import './WorkExperience.css';
import Navbar from '../../Components/Navbar/Navbar';
import ContactBar from '../../Components/ContactBar/ContactBar';
import CHH from '../../Assets/CHH.png';
import AYS from '../../Assets/AYS.png';
import judge from '../../Assets/judge.png';
import orchestra from '../../Assets/orchestra.png';
import resume from '../../Assets/resume.png';


const workExperience = () => {
    return (
        <Container fluid className="web">
            <Row className="page_banner">
                <Col>
                    <Navbar/>
                    <Row>
                        <Col>
                            <div className="banner_header">
                                <div className="page_title">
                                   Current Resume
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="gray_rectangle">
                <Col className="d-flex justify-content-center">
                    <div>
                        <img src={resume} className="resume"/>
                    </div>
                </Col>
            </Row>
            <Row className="about_section">
                <Col>
                    <div className="about_header">
                        About American Youth Symphony
                    </div>
                    <br/>
                    <div>
                        The American Youth Symphony is a world-renowned orchestra that is made up of 100 early-career musicians. They provide professional training to virtuosic musicians and perform concerts in the Los Angeles community.  They continue to promote innovative and exceptional ideas through music. 
                    </div>
                    <Row className="about_image_section">
                        <Col md={4}>
                            <a href="https://www.aysymphony.org">
                                <Image src={AYS} className="about_images"/>
                            </a>
                        </Col>
                        <Col md={8} className="d-flex">
                            <Image src={orchestra} className="about_images align-self-center"/>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <div className="about_header">
                        About CHH Law, PC
                    </div>
                    <br/>
                    <div>
                        CHH Law, PC is a professional law corporation that provides high-quality and affordable legal service to any person in need. Their specialty fields include employment, family law, criminal defense, bankruptcy, immigration and business law. 
                    </div>
                    <Row className="about_image_section">
                        <Col md={4}>
                            <a href="http://www.chhllp.com">
                                <Image src={CHH} className="about_images"/>
                            </a>
                        </Col>
                        <Col md={8} className="d-flex">
                                <Image src={judge} className="about_images align-self-center"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <ContactBar />
        </Container>
    );
};

export default workExperience;