import React from 'react'
import './Team.css'
import {Card,Col,Image,Row} from 'react-bootstrap'

const Team = () => {
    return (
        <div>
            <h2>Team</h2>
            <Row className='card-row-1'>
            <Card style={{ width: '18rem' }} className='card2'>
                
                <Card.Body>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                </Card>
                </Row>
            /*First Row*/ 
            <Row className='card-row-2'>
            <Card style={{ width: '18rem' }} className='card2'>
                
                <Card.Body>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='card3'> 
                <Card.Body>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} className='card4'>
                <Card.Body>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                    </Card>
                </Row>
                Second Row
                <Row className='card-row-3'>
            <Card style={{ width: '18rem' }} className='card2'>
                
                <Card.Body>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='card3'> 
                <Card.Body>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} className='card4'>
                <Card.Body>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                    </Card>
                </Row>

        </div>
    )
}

export default Team
