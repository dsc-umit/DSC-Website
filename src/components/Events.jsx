import React from 'react'
import { Container, Row, Image } from 'react-bootstrap'
import { Card, Col } from 'react-bootstrap'
import event1 from '../media/event1.jpeg'
import event2 from '../media/event2.jpeg'
import event3 from '../media/event3.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import stayTuned from '../media/Stay-tuned.png'

import "./Events.css"

const Events = () => {
    return (
        <Container id="events">
            <br /> <br />
            <Row>
                <h2 class="section-title">Events &amp; Workshops</h2>
                <p class="section">Click <a href="https://gdsc.community.dev/usha-mittal-institute-of-technology/" className='alink' target="_blank" rel="noopener noreferrer">here</a> to know about our upcoming events!
                    <br></br>Come learn, share and connect with us in person.</p>
                {/* <Image src={stayTuned} className="stay-tuned" alt="coming-soon" align="center" /> */}
               <Col lg = {6}  style={{display:" flex",justifyContent : "center", alignItems:"center" , margin: "0 auto"}}>
               <Carousel  variant="dark" >
                    <div >
                        <img src={event1} />
                        <p className="legend"><h6>30 Days of Web Development</h6>
                        <br/>19th September 2021, 4pm Onwards</p>
                    </div>
                    <div>
                        <img src={event2} />
                        <p className="legend"><h6>Hack The Space [Hackathon]</h6>
                        <br/>27th November 2021, 4pm Onwards</p>
                    </div>
                    <div>
                        <img src={event3} />
                        <p className="legend"><h6>Solution Challenge [Intro Session]</h6>
                        <br/> 27th November 2021, 4pm Onwards </p>
                    </div>
                </Carousel>
             
              
               </Col>
                {/* 
                <Carousel variant="dark">
                    <Carousel.Item interval={1000} style={{alignItems:"center"}}>
                    <Col lg={8} >
                        <Container className='event1' >
                            <Card class="events-card" style={{alignItems:"center"}}>
                                <Card.Img class="img-fluid" alt="100%x280" variant="top" src={event1} />
                                <Card.Body>
                                    <h4 class="card-title">30 Days of Web<br></br> Development</h4>
                                    <Card.Text>
                                        19th September 2021, 4pm Onwards
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                    <Col lg={4}>
                        <Container>
                            <Card class="events-card">
                                <Card.Img class="img-fluid" alt="100%x280" variant="top" src={event2} />
                                <Card.Body>
                                    <h4 class="card-title">Hack The Space<br></br>[Hackathon]</h4>
                                    <Card.Text>
                                        27th November 2021, 4pm Onwards
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Col lg={4}>
                        <Container>
                            <Card class="events-card">
                                <Card.Img class="img-fluid" alt="100%x280" variant="top" src={event3} />
                                <Card.Body>
                                    <h4 class="card-title">Solution Challenge<br></br>[Intro Session]</h4>
                                    <Card.Text>
                                        27th November 2021, 4pm Onwards
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    </Carousel.Item>
                </Carousel> */}

                {/* <CardGroup>
                    <Col lg={4}>
                        <Container className='event1'>
                            <Card class="events-card">
                                <Card.Img class="img-fluid" alt="100%x280" variant="top" src={event1} />
                                <Card.Body>
                                    <h4 class="card-title">30 Days of Web<br></br> Development</h4>
                                    <Card.Text>
                                        19th September 2021, 4pm Onwards
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    <Col lg={4}>
                        <Container>
                            <Card class="events-card">
                                <Card.Img class="img-fluid" alt="100%x280" variant="top" src={event2} />
                                <Card.Body>
                                    <h4 class="card-title">Hack The Space<br></br>[Hackathon]</h4>
                                    <Card.Text>
                                        27th November 2021, 4pm Onwards
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    <Col lg={4}>
                        <Container>
                            <Card class="events-card">
                                <Card.Img class="img-fluid" alt="100%x280" variant="top" src={event3} />
                                <Card.Body>
                                    <h4 class="card-title">Solution Challenge<br></br>[Intro Session]</h4>
                                    <Card.Text>
                                        27th November 2021, 4pm Onwards
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                </CardGroup> */}
            </Row>
        </Container>
    )
}

export default Events