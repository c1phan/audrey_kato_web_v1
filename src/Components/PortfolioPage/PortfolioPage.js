import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import '../../App.css';
import './PortfolioPage.css';
import Navbar from '../Navbar/Navbar';
import ContactBar from '../ContactBar/ContactBar';
import brochure_1 from '../../Assets/brochure_1.png';
import brochure_2 from '../../Assets/brochure_2.png';
import glance from '../../Assets/glance.png';
import collage from '../../Assets/collage.png';
import save_the_date from '../../Assets/save_the_date.png';
import butch_beach from '../../Assets/butch_beach.png';
import unicef_1 from '../../Assets/unicef_1.png';
import unicef_2 from '../../Assets/unicef_2.png';
import Annenburg_1 from '../../Assets/Annenburg_1.png';
import Annenburg_2 from '../../Assets/Annenburg_2.png';
import whinyBitch from '../../Assets/whiny_bitch.mp3';
import lyingBitch from '../../Assets/lying_bitch.mp3';

const PortfolioPage = () => {
    return (
        <Container fluid className="web">
            <Row className="page_banner">
                <Col>
                    <Navbar/>
                    <Row>
                        <Col>
                            <div className="banner_header">
                                <div className="page_title">
                                   Content Portfolio
                                </div>
                            </div>
                        </Col>
                    </Row> 
                </Col>
            </Row>
            <Row className="pink_rectangle_bg">
                <Col>
                    <Row>
                        <Col>
                            <div className="underlined_sub">
                                Graphic Designs
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="portfolio_header">American Youth Symphony 19/20 Season Brochure</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="d-flex justify-content-center">
                            <img src={brochure_1} className="brochure"/>
                        </Col>
                        <Col md={6} className="d-flex justify-content-center">
                            <img src={brochure_2} className="brochure"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col>
                                    <p className="portfolio_header">American Youth Symphony 19/20 Concert Season at a Glance</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                    <img src={glance} className="glance"/>
                                 </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col>
                                    <p className="portfolio_header">USC PR 487 Collage </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                    <img src={collage} className="collage"/>
                                 </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <Row>
                                <Col>
                                    <p className="portfolio_header">American Youth Symphony Opening Night Concert Banner</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <img src={save_the_date} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <Row>
                                <Col>
                                    <p className="portfolio_header">USC PR 487 Instagram Collage </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <img src={butch_beach} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="underlined_sub">
                                Press Release Samples
                            </div>
                        </Col>
                    </Row>
                    <Row className="press_rows">
                        <Col>
                            <Row>
                                <Col>
                                    <p className="portfolio_header">USC PR 209 UNICEF Sample Press Release </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <img src={unicef_1} />
                                </Col>
                                <Col md={6}>
                                    <img src={unicef_2} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="press_rows">
                        <Col>
                            <Row>
                                <Col>
                                    <p className="portfolio_header">USC PR 209 "Get Out & Vote" Sample Press Release</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <img src={Annenburg_1} />
                                </Col>
                                <Col md={6}>
                                    <img src={Annenburg_2} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <div className="underlined_sub">
                                        Video/Audio Content
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center sa_padding">
                                    <div className="d-flex flex-column portfolio_header">
                                        "What makes a great leader?" Podcast  
                                        <audio controls src={lyingBitch}></audio>
                                    </div>
                                </Col>
                                <Col className="d-flex justify-content-center sa_padding">
                                    <div className="d-flex flex-column portfolio_header">
                                        "The Elevator" Audio Story  
                                        <audio controls src={whinyBitch}></audio>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Col md={6} className="d-flex justify-content-center bigger_font above_padding bs_margin">
                                    <a href="https://www.youtube.com/channel/UCF5aCII63d3sWedguhoo2jg?view_as=subscriber">
                                        <p className="portfolio_header" style={{textAlign: "center"}}>Check out my YouTube Channel! </p>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <ContactBar/>
        </Container>
    );
};

export default PortfolioPage;