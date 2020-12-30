import React, { Component } from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import "./ContactBar.css";
import '../../App.css';
import {Link} from "react-router-dom"
import instagram_icon from '../../Assets/instagram.png';
import linkedin_icon from '../../Assets/linkedin.png';
import youtube_icon from '../../Assets/youtube.png';

const navbar = () => {
    return(
        <Row className="gray_rectangle contact_us d-flex justify-content-center">
            <Col lg={9}>
                <Row className="contact_title">
                    <Col>
                        <b>Connect with me!</b>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-between">
                        <a href="https:/www.linkedin.com/in/audreyekato">
                            <Image src={linkedin_icon} className="icons"/>
                        </a>
                        <a href="https://www.instagram.com/audreykato/">
                            <Image src={instagram_icon} className="icons"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCF5aCII63d3sWedguhoo2jg?view_as=subscriber">
                            <Image src={youtube_icon} className="icons"/>
                        </a>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default navbar;