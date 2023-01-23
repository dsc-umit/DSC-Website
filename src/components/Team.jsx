import React from 'react'
import './Team.css'
import krithika from '../media/Krithika.jpg';
import preethika from '../media/Preethika.jpeg';
import tanvi from '../media/Tanvi.jpg';
import samruddhi from '../media/Samruddhi.jpg';
import shweta from '../media/Shweta.jpg';
import arti from '../media/Arti.jpg';

import { Card, Col, Image, Row, Container } from 'react-bootstrap'
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa'
const Team = () => {
    return (
        <div id="team">
            <br /> <br />
            <Container>
                <h2 className='team'>Team</h2>
                <center>
                    <i className='team-h'>"We are a bunch of cool people trying to attempt some serious stuff"</i>
                </center>
                <Row className='card-row-1'>
                    <center>
                        <Card className='card1' align="center">
                            <Card.Body>
                                <Image src={krithika} className='picture' roundedCircle />
                                <Card.Title>Krithika Saravanan</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">GDSC Lead</Card.Subtitle>
                                <Card.Text className="team-text">"I believe that learning is a stream, and it ought not to stop"</Card.Text>
                                <Card.Link href="https://github.com/krithika2411"><SiGithub className='social' color='#000000' size='1.7em' /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/krithika-saravanan7/"><FaLinkedin className='social' color='#000000' size='1.7em' /></Card.Link>
                            </Card.Body>
                        </Card>
                    </center>
                </Row>

                <Row className='card-row-2'>
                    <Col lg={4}>
                        <Card className='card2'>
                            <Card.Body>
                                <Image src={preethika} className='picture' roundedCircle />
                                <Card.Title>Preethika K</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Core Team Member</Card.Subtitle>
                                <Card.Text className="team-text">"We both have something in common. You don't know what I'm going to say and neither do I."</Card.Text>
                                <Card.Link href="https://github.com/Preeti3024"><SiGithub className='social' color='#000000' size='1.7em' /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/preethika-k-658872206/"><FaLinkedin className='social' color='#000000' size='1.7em' /></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className='card3'>
                            <Card.Body>
                                <Image src={tanvi} className='picture' roundedCircle />
                                <Card.Title>Tanvi Mantri</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Core Team Member</Card.Subtitle>
                                <Card.Text className="team-text">"There is no such thing as work life balance, when your work is your life"</Card.Text>
                                <br></br>
                                <Card.Link href="https://github.com/tanvimantri"><SiGithub className='social' color='#000000' size='1.7em' /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/tanvi-mantri/"><FaLinkedin className='social' color='#000000' size='1.7em' /></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className='card4'>
                            <Card.Body>
                                <Image src={samruddhi} className='picture' roundedCircle />
                                <Card.Title>Samruddhi Bagave</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Core Team Member</Card.Subtitle>
                                <Card.Text className="team-text">"I believe that you gain more from mistakes than triumphs. So keep trying!"</Card.Text>
                                <br></br>
                                <Card.Link href="https://github.com/samrudddhi29"><SiGithub className='social' color='#000000' size='1.7em' /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/samruddhi-bagave/"><FaLinkedin className='social' color='#000000' size='1.7em' /></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className='card-row-3'>
                    <Col lg={4}>
                        <Card className='card5'>
                            <Card.Body>
                                <Image src={shweta} className='picture' roundedCircle />
                                <Card.Title>Shweta Bhalla</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Core Team Member</Card.Subtitle>
                                <Card.Text className="team-text">"I believe that being confident in whatever comes my way is imperative since development is never going to be a cakewalk!"</Card.Text>
                                <Card.Link href="https://www.linkedin.com/in/shweta-bhalla-951172218/"><SiGithub className='social' color='#000000' size='1.7em' /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/shweta-bhalla-951172218/"><FaLinkedin className='social' color='#000000' size='1.7em' /></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className='card6'>
                            <Card.Body>
                                <Image src={arti} className='picture' roundedCircle />
                                <Card.Title>Arti Bhandari</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Core Team Member</Card.Subtitle>
                                <Card.Text className="team-text">"If I believe it will succeed, I'll see opportunities. If I believe it won't I will see obstructions"</Card.Text>
                                <br></br>
                                <Card.Link href="https://github.com/arti2002"><SiGithub className='social' color='#000000' size='1.7em' /></Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/artibhandari/"><FaLinkedin className='social' color='#000000' size='1.7em' /></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Team
