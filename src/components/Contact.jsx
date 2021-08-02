import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const Contact = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.483121923021!2d72.82830744981766!3d19.086450178517236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x202d318309cd0d56!2sUsha%20Mittal%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1627838446541!5m2!1sen!2sin" width="100%" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                    </Col>
                    <Col lg={6}>
                        <Form>
                            <Row>
                                <Form.Group as={Col}>
                                    <Form.Control placeholder="Your Name" />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Control type="email" placeholder="Your Email-id" />
                                </Form.Group>
                            </Row>

                            <Form.Group>
                                <Form.Control placeholder="Enter the Subject" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control placeholder="Write your message..." as="textarea" rows={6} />
                            </Form.Group>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact
