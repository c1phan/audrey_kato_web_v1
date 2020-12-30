import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import '../../App.css';
import './MusicPage.css';
import Navbar from '../Navbar/Navbar';
import ContactBar from '../ContactBar/ContactBar';
import dumbBitch from '../../Assets/dumb_bitch.png';
import harp from '../../Assets/harp.png';
import privilegedBitch from '../../Assets/privileged_bitch.png';
import beastiality from '../../Assets/beastiality.mp3';
import suckMyD from '../../Assets/suck_my_D.mp3';



const MusicPage = () => {
    return (
        <Container fluid className="web">
            <Row className="page_banner">
                <Col>
                    <Navbar/>
                    <Row>
                        <Col>
                            <div className="banner_header">
                                <div className="page_title">
                                   Music/Audio
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="pink_rectangle_bg">
                <Col>
                    <Row>
                        <Col xl={4} className="d-flex justify-content-center image_container negative_margin">
                            <div>
                                <img src={privilegedBitch} className="harp"/>
                            </div>
                        </Col>
                        <Col xl={4} className="d-flex justify-content-center image_container neg_margin">
                            <div>
                                <img src={harp} className="harp"/>
                            </div>
                        </Col>
                        <Col xl={4} className="d-flex justify-content-center image_container neg_margin">
                            <div>
                                <img src={dumbBitch} className="harp"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="top_margin">
                            Music has played an important factor in my life. From when I started playing piano at the age of 5, to learning classical pieces on the harp at the age of sixteen,  through the years, I have developed a career as a professional harpist using my public relation and marketing skills. I participated in many orchestras and ensembles under the teachings of world-renowned harpist Allison Allport Ph.D.  I also play at weddings in the Southern California Area. This page features some of my best moments as a harpist. In my free time, I volunteer at the Huntington Memorial Hospital as a harpist for patients and guests. 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="underlined_sub">
                                Video Recordings
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex flex-column justify-content-center">
                            <p className="portfolio_header"> Harp Ensemble Reel </p>
                            <iframe src='https://www.youtube.com/embed/WUTqLNSZ_10'
                                    frameborder='0'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                            />
                        </Col>
                        <Col className="d-flex flex-column justify-content-center">
                            <p className="portfolio_header"> Orchestral Harp Reel </p>
                            <iframe src='https://www.youtube.com/embed/BkBLzXjPSt8'
                                    frameborder='0'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="underlined_sub above_padding bot_margin">
                                Audio Recordings
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <div className="d-flex flex-column portfolio_header">
                                Canon in D by Johann Pachabel
                                <audio controls src={suckMyD}></audio>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <div className="d-flex flex-column portfolio_header">
                                Beauty and the Beast by Alan Menken
                                <audio controls src={beastiality}></audio>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <ContactBar/>
        </Container>
    );
};

export default MusicPage;
                