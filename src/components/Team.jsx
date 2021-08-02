import React from 'react'
import './Team.css'
import tejaswi from '../media/Tejaswi.jpg';
import jhanvi from '../media/Jhanvi.jpg';
import manali from '../media/Manali.jpg';
import sanskriti from '../media/sk.jpg';
import irit from '../media/Irit.jpg';
import tejashri from '../media/Tejashri.jpg';
import shruti from '../media/Shruti.jpg'
import {Card,Col,Image,Row} from 'react-bootstrap'
import { SiGithub } from 'react-icons/si';
import {FaLinkedin} from 'react-icons/fa'
const Team = () => {
    return (
        <div>
            <h2>Team</h2>
            <Row className='card-row-1'>
            <Card style={{ width: '21rem' }} className='card1'>
            <Card.Body>
                <Col xs={2} md={2} >
                    <Image src={tejaswi} className='picture' roundedCircle />
                </Col>
                <center>
                <br></br>
                <Card.Title>Tejaswi Chaudhari</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">GDSC Lead</Card.Subtitle>
                <Card.Text>
                About you
                </Card.Text>
                <Card.Link href="https://github.com/Tejaswi-Chaudhari"><SiGithub className='social' color='#000000' size='1.7em'/></Card.Link>
                <Card.Link href="https://www.linkedin.com/in/tejaswi-chaudhari/"><FaLinkedin className='social' color='#000000' size='1.7em'/></Card.Link>
                </center>
                </Card.Body>
                </Card>
                </Row>
            <Row className='card-row-2'>
            <Card style={{ width: '21rem' }} className='card2 '>
                
                <Card.Body>
                
                <Col xs={6} md={4}>
                    <Image src={jhanvi} className='picture' roundedCircle />
                </Col>
                <center>
                <br></br>
                <Card.Title>Jhanvi Desai</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Core Team Member</Card.Subtitle>
                <Card.Text>
                    About you
                </Card.Text>
                <Card.Link href="https://github.com/JSDesai"><SiGithub className='social' color='#000000' size='1.7em'/></Card.Link>
                <Card.Link href="https://www.linkedin.com/in/jhanvi-desai-633428192/"><FaLinkedin className='social' color='#000000' size='1.7em'/></Card.Link>
                </center>
                </Card.Body>
                </Card>
                <Card style={{ width: '21rem' }} className='card3'> 
                <Card.Body>
                <Col xs={6} md={4}>
                    <Image src={manali} className='picture' roundedCircle />
                </Col>
                <center>
                    <br></br>
                <Card.Title>Manali Chaudhari</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Core Team Member</Card.Subtitle>
                <Card.Text>
                About you
                </Card.Text>
                <Card.Link href="https://github.com/Manalipc10"><SiGithub className='social' color='#000000' size='1.7em'/></Card.Link>
                <Card.Link href="https://www.linkedin.com/in/manali-chaudhari/"><FaLinkedin className='social' color='#000000' size='1.7em'/></Card.Link>
                </center>
                </Card.Body>
                    </Card>

                    <Card style={{ width: '21rem' }} className='card4'>
                <Card.Body>
                
                <Col xs={12} lg={4}>
                    <Image src={shruti} className='picture' roundedCircle />
                </Col>
                <center>
                    <br></br>
                <Card.Title>Shruti Gavali</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Core Team Member</Card.Subtitle>
                <Card.Text>
                About you
                </Card.Text>
                <Card.Link href="https://www.linkedin.com/in/shruti-gavali/"><SiGithub className='social' color='#000000' size='1.7em'/></Card.Link>
                <Card.Link href="https://github.com/shrutig2110"><FaLinkedin className='social' color='#000000' size='1.7em'/></Card.Link>
                </center>
                </Card.Body>
                    </Card>
                </Row>

                <Row className='card-row-3'>
            <Card style={{ width: '21rem' }} className='card5'>
                
                <Card.Body>
                <Col xs={6} md={4}>
                    <Image src={sanskriti} className='picture' roundedCircle />
                </Col>
                <center>
                    <br></br>
                <Card.Title>Sanskriti Kushik</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Core Team Member</Card.Subtitle>
                <Card.Text>
                About you
                </Card.Text>
                <Card.Link href="https://github.com/SanskritiKushik5"><SiGithub className='social' color='#000000' size='1.7em'/></Card.Link>
                <Card.Link href="https://www.linkedin.com/in/sanskriti-kushik-2302/"><FaLinkedin className='social' color='#000000' size='1.7em'/></Card.Link>
                </center>
                </Card.Body>
                </Card>

                <Card style={{ width: '21rem' }} className='card6'> 
                <Card.Body>
                
                <Col xs={6} md={4}>
                    <Image src={irit} className='picture' roundedCircle />
                </Col>
                <center>
                <br></br>
                <Card.Title>Irit Kushwaha</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Core Team Member</Card.Subtitle>
                <Card.Text>
                About you
                </Card.Text>
                <Card.Link href="https://github.com/irit2607"><SiGithub className='social' color='#000000' size='1.7em'/></Card.Link>
                <Card.Link href="https://www.linkedin.com/in/irit-kushwaha-2607/"><FaLinkedin className='social' color='#000000' size='1.7em'/></Card.Link>
                </center>
                </Card.Body>
                    </Card>

                    <Card style={{ width: '21rem' }} className='card7'>
                <Card.Body>
                
                <Col xs={6} md={4}>
                    <Image src={tejashri} className='picture' roundedCircle />
                </Col>
                <center>
                <br></br>
                <Card.Title>Tejashri Mithbawkar</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Core Team Member</Card.Subtitle>
                <Card.Text>
                About you
                </Card.Text>
                <Card.Link   href="https://github.com/tejashri-110"><SiGithub className='social' color='#000000' size='1.7em'/></Card.Link>
                <Card.Link  href="https://www.linkedin.com/in/tejashri-mitbavkar-bb3871192/"><FaLinkedin className='social' color='#000000' size='1.7em'/></Card.Link>
                </center>
                </Card.Body>
                    </Card>
                </Row>

        </div>
    )
}

export default Team
