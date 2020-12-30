import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import "./Navbar.css";
import {Link} from "react-router-dom"

const navbar = () => {
    return(
        <Row className="navbar">
            <Col><Link to="/about">About</Link></Col>
            <Col><Link to="/workExperience">Work Experience</Link></Col>
            <Col><Link to="/portfolio">Portfolio</Link></Col>
            <Col><Link to="/Music/Audio">Music/Audio</Link></Col>
        </Row>
    );
}

export default navbar;