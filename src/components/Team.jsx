import React from 'react'
import './Team.css'
import tejaswi from '../media/Tejaswi.jpg';
import jhanvi from '../media/Jhanvi.jpg';
import manali from '../media/Manali.jpg';
import sanskriti from '../media/sk.jpg';
import irit from '../media/Irit.jpg';
import tejashri from '../media/Tejashri.jpg';
import shruti from '../media/Shruti.jpg'
import { Card, Col, Image, Row, Container } from 'react-bootstrap'
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa'
const Team = () => {
    return (
        <div>
        <Container>
            <h2>Team</h2>
            <Row className='card-row-1'>
                <center>
                    <Card className='card1' align="center">
                        <Card.Body>
                            <Image src={tejaswi} className='picture' roundedCircle />
                            <Card.Title>Tejaswi Chaudhari</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">GDSC Lead</Card.Subtitle>
                            <Card.Text>About you</Card.Text>
                            <Card.Link href="https://github.com/Tejaswi-Chaudhari"><SiGithub className='social' color='#000000' size='1.7em'/></Card.Link>
                            <Card.Link href="https://www.linkedin.com/in/tejaswi-chaudhari/"><FaLinkedin className='social' color='#000000' size='1.7em'/></Card.Link>
                        </Card.Body>
                    </Card>
                </center>
            </Row>

            <Row className='card-row-2'>
                <Col lg={4}>
                    <Card className='card2'>
                        <Card.Body>
                            <Image src={jhanvi} className='picture' roundedCircle />
                            <Card.Title>Jhanvi Desai</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Core Team Member</Card.Subtitle>
                            <Card.Text>About you</Card.Text>
                            <Card.Link href="https://github.com/JSDesai"><SiGithub className='social' color='#000000' size='1.7em'/></Card.Link>
                            <Card.Link href="https://www.linkedin.com/in/jhanvi-desai-633428192/"><FaLinkedin className='social' color='#000000' size='1.7em'/></Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className='card3'> 
                        <Card.Body>
                            <Image src={manali} className='picture' roundedCircle />
                            <Card.Title>Manali Chaudhari</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Core Team Member</Card.Subtitle>
                            <Card.Text>About you</Card.Text>
                            <Card.Link href="https://github.com/Manalipc10"><SiGithub className='social' color='#000000' size='1.7em'/></Card.Link>
                            <Card.Link href="https://www.linkedin.com/in/manali-chaudhari/"><FaLinkedin className='social' color='#000000' size='1.7em'/></Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className='card4'>
                        <Card.Body>
                            <Image src={shruti} className='picture' roundedCircle />
                            <Card.Title>Shruti Gavali</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Core Team Member</Card.Subtitle>
                            <Card.Text>About you</Card.Text>
                            <Card.Link href="https://www.linkedin.com/in/shruti-gavali/"><SiGithub className='social' color='#000000' size='1.7em'/></Card.Link>
                            <Card.Link href="https://github.com/shrutig2110"><FaLinkedin className='social' color='#000000' size='1.7em'/></Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className='card-row-3'>
                <Col lg={4}>
                    <Card className='card5'>
                        <Card.Body>
                            <Image src={sanskriti} className='picture' roundedCircle />
                            <Card.Title>Sanskriti Kushik</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Core Team Member</Card.Subtitle>
                            <Card.Text>About you</Card.Text>
                            <Card.Link href="https://github.com/SanskritiKushik5"><SiGithub className='social' color='#000000' size='1.7em'/></Card.Link>
                            <Card.Link href="https://www.linkedin.com/in/sanskriti-kushik-2302/"><FaLinkedin className='social' color='#000000' size='1.7em'/></Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className='card6'> 
                        <Card.Body>
                            <Image src={irit} className='picture' roundedCircle />
                            <Card.Title>Irit Kushwaha</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Core Team Member</Card.Subtitle>
                            <Card.Text>About you</Card.Text>
                            <Card.Link href="https://github.com/irit2607"><SiGithub className='social' color='#000000' size='1.7em'/></Card.Link>
                            <Card.Link href="https://www.linkedin.com/in/irit-kushwaha-2607/"><FaLinkedin className='social' color='#000000' size='1.7em'/></Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className='card7'>
                        <Card.Body>
                            <Image src={tejashri} className='picture' roundedCircle />
                            <Card.Title>Tejashri Mitbavkar</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Core Team Member</Card.Subtitle>
                            <Card.Text>About you</Card.Text>
                            <Card.Link   href="https://github.com/tejashri-110"><SiGithub className='social' color='#000000' size='1.7em'/></Card.Link>
                            <Card.Link  href="https://www.linkedin.com/in/tejashri-mitbavkar-bb3871192/"><FaLinkedin className='social' color='#000000' size='1.7em'/></Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Team
