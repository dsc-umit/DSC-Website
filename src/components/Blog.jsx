import React from 'react'
import { Row, Col, Button, Card, Container } from 'react-bootstrap'
import './Blog.css'
import Blog1 from '../media/blg1.jpg';
import Blog2 from '../media/blg2.jpg';
import Blog3 from '../media/blg3.jpg';


const Blog = ({ mode }) => {
  return (
    <div class='blogs' id="blog" data-theme={mode ? "dark" : "light"}>
      <br /> <br />
      <Container align='center'>
        <br></br>
        <h2 className='blog'>Blogs</h2>
        <br></br>
        <div>
          <Row className='cardrow1'>
            <Col lg={6}>
              <Card className="blog-card blog-card-view">
                <Card.Img variant="top" src={Blog3} />
                <Card.Body>
                  <br></br>
                  <Card.Title className="blogs-title">GDSC AUGUST Blog Journal</Card.Title>
                  
                  <a href="https://medium.com/dsc-umit"
                    style={{ color: "white", textDecoration: "none" }}
                    target="_blank" rel="noreferrer noopener">
                    <Button variant="primary" className='readmore'>Read More</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="blog-card blog-card-view">
                <Card.Img variant="top" src={Blog2} />
                <Card.Body>
                  <br></br>
                  <Card.Title className="blogs-title">GDSC SEPTEMBER Blog Journal</Card.Title><br></br>
                  
                  <a href="https://medium.com/dsc-umit"
                    style={{ color: "white", textDecoration: "none" }}
                    target="_blank" rel="noreferrer noopener">
                    <Button variant="primary" className='readmore'>Read More</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <br></br>
        <br></br>
        <div>
          <Row className='cardrow2'>
            <Col lg={6}>
              <Card className="blog-card blog-card-view">
                <Card.Img variant="top" src={Blog1} />
                <Card.Body>
                  <br></br>
                  <Card.Title className="blogs-title">GDSC OCTOBER Blog Journal</Card.Title>
                  
                  <a href="https://medium.com/dsc-umit"
                    style={{ color: "white", textDecoration: "none" }}
                    target="_blank" rel="noreferrer noopener">
                    <Button variant="primary" className='readmore'>Read More</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>

          
          </Row>
        </div>
        
      </Container>
    </div>
  )
}

export default Blog