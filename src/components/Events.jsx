import React from 'react'
import { Container, Row, Image } from 'react-bootstrap'
import { Card, Col } from 'react-bootstrap'

import event11 from '../media/ev11.jpg';
import event12 from '../media/ev12.jpg';
import event13 from '../media/ev13.jpg';
import event21 from '../media/ev21.jpg';
import event22 from '../media/ev22.jpg';
import event23 from '../media/ev23.jpg';
import event31 from '../media/ev31.jpg';
import event32 from '../media/ev32.jpg';
import event33 from '../media/ev33.jpg';
import event41 from '../media/ev41.jpg';
import event42 from '../media/ev42.jpg';
import event43 from '../media/ev43.jpg';
import event51 from '../media/ev51.jpg';
import event52 from '../media/ev52.jpg';
import event53 from '../media/ev53.jpg';
import event61 from '../media/ev61.jpg';
import event62 from '../media/ev62.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import stayTuned from '../media/Stay-tuned.png'

import "./Events.css"

const Events = () => {
    return (
        <>
        <Container id="events">
            <br /> 
      <Row>
                <h2 class="section-title">Events &amp; Workshops</h2>
                <p class="section">Click <a href="https://gdsc.community.dev/usha-mittal-institute-of-technology/" className='alink' target="_blank" rel="noopener noreferrer">here</a> to know about our upcoming events!
                    <br></br><b>Come learn, share and connect with us in person.</b></p>
                {/* <Image src={stayTuned} className="stay-tuned" alt="coming-soon" align="center" /> */}
               <Col lg = {4}  style={{display:" flex",justifyContent : "left", alignItems:"left" }}>
               <Carousel  variant="dark" >
                    <div >
                        <img src={event61} />
                        <p className="legend"><h6>Resume Building Session</h6>
                        </p>
                    </div>
                    <div>
                        <img src={event62} />
                        
                    </div>
                </Carousel></Col>

                <Col lg = {4}  style={{display:" flex",justifyContent : "center", alignItems:"center" , margin: "0 auto"}}>
               <Carousel  variant="dark" >
                    <div >
                        <img src={event11} />
                       
                    </div>
                    <div>
                        <img src={event12} />
                        
                    </div>
                    <div>
                        <img src={event13} />
                        
                    </div>
                 </Carousel>
               </Col>
              
               <Col lg = {4}  style={{display:" flex",justifyContent : "right", alignItems:"right" }}>
               <Carousel  variant="dark" >
                    <div >
                        <img src={event22} />
                     
                    </div>
                    <div>
                        <img src={event21} />
                       
                    </div>
                    <div>
                        <img src={event23} />
                        
                    </div>
                </Carousel></Col>

                <Col lg = {4}  style={{display:" flex",justifyContent : "center", alignItems:"center" , margin: "0 auto"}}>
               <Carousel  variant="dark" >
                    <div >
                        <img src={event31} />
                       
                    </div>
                    <div>
                        <img src={event32} />
                        
                    </div>
                    <div>
                        <img src={event33} />
                        
                    </div>
                 </Carousel>
               </Col>

               <Col lg = {4}  style={{display:" flex",justifyContent : "center", alignItems:"center" , margin: "0 auto"}}>
               <Carousel  variant="dark" >
                    <div >
                        <img src={event41} />
                       
                    </div>
                    <div>
                        <img src={event42} />
                        
                    </div>
                    <div>
                        <img src={event43} />
                        
                    </div>
                 </Carousel>
               </Col>

               <Col lg = {4}  style={{display:" flex",justifyContent : "center", alignItems:"center" , margin: "0 auto"}}>
               <Carousel  variant="dark" >
                    <div >
                        <img src={event51} />
                       
                    </div>
                    <div>
                        <img src={event52} />
                        
                    </div>
                    <div>
                        <img src={event53} />
                        
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
        </>
    )
}

export default Events