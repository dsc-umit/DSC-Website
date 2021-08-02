import React from 'react'
import { Card, Button, CardGroup, Container, Row, Col } from 'react-bootstrap'
import event1 from '../media/event1.jpeg'
import event2 from '../media/event2.jpeg'
import event3 from '../media/event3.jpeg'

import "./Events.css"

const Events = () => {
    return (
        <Container>
            <Row>
                <h2 class="section-title">Events &amp; Workshops</h2>
                <p class="section">Click <a href="https://dsc.community.dev/usha-mittal-institute-of-technology/">here</a> to know about our upcoming events!</p>
                <p class="section-subtitle">Come learn, share and connect with us in person.</p>
                <CardGroup>
                    <Col lg={4}>
                        <Container >
                            <Card class="card">
                                <Card.Img class="img-fluid" alt="100%x280" variant="top" src={event1} />
                                <Card.Body>
                                    <h4 class="card-title">#30DAYS:Web Development</h4>
                                    <Card.Text>
                                        Date and Time: 19th September 2021 4pm Onwards
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    <Col lg={4}>
                        <Container>
                            <Card class="card">
                                <Card.Img class="img-fluid" alt="100%x280" variant="top" src={event2} />
                                <Card.Body>
                                    <h4 class="card-title">Hack The Space: 48 hours</h4>
                                    <Card.Text>
                                        Date and Time: 27th November 2021 4pm Onwards
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    <Col lg={4}>
                        <Container>
                            <Card class="card">
                                <Card.Img class="img-fluid" alt="100%x280" variant="top" src={event3} />
                                <Card.Body>
                                    <h4 class="card-title">Solution Challenge</h4>
                                    <Card.Text>
                                        Date and Time: 27th November 2021 4pm Onwards
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                </CardGroup>
            </Row>
        </Container>
    )
}

export default Events