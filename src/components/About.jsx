import React from 'react'
import {Container, Image, Row, Col} from 'react-bootstrap';
import img1 from '../media/3.png';
import img2 from '../media/7.png';
import "./About.css";

const About = () => {
    return (
        <Container id="about">
            <br />
            <Row className="about-1">
                <Col xs={12} lg={7} className="col1">
                    <h3 className="lead about-h">About Google Developer Student Club</h3>
                    <p>Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community. Opportunities DSCs provide students with :
                    <ul>
                    <li>Gain relevant industry experience by solving problems for local organizations with technology based solutions.</li>
                    <li>Showcase their prototypes and solutions to their local community and industry.</li>
                    <li>Grow their knowledge on developer technologies and more through peer to peer</li>
                    <li>Getting inspiration to become world-class developers and changemakers.</li>
                    </ul>
                    </p>
                </Col>
                <Col lg={5}>
                <Image className="about" src={img1} alt="about img" fluid/>
                </Col>
            </Row>
        <br/>
        <br/>
            <Row className="about-2">
                <Col xs={12} lg={4} className='col1'>
                    <center>
                <Image className="umit" src={img2} alt="about img" fluid/>
                </center>
                </Col>
                <Col lg={8}>
                    <h3 className="lead about-h">About GDSC-UMIT</h3>
                    <p>Developer Student Clubs of Usha Mittal Institute Of Technology, powered by Google Developers, is a learning community that aims to inspire intelligent minds in the field of technology. It is open to any student, ranging from amateur developers who are just starting to advanced developers. It is a community for students to connect and collaborate as they solve real-world problems.
                    <br></br>We at DSC UMIT believe in building a strong community where people can learn and grow together. Our goal is to combine new ideas with technical skills to create something innovative.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default About
