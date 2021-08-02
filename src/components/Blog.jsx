import React from 'react'
import {Row, Col, Button, Card, Container} from 'react-bootstrap'
import './Blog.css'
import blog1 from '../media/Blog-1.jpg';
import blog2 from '../media/Blog-2.jpg';
import blog3 from '../media/Blog-3.jpg';
import blog4 from '../media/Blog-4.jpg';
import blog5 from '../media/Blog-5.jpg';
import blog6 from '../media/Blog-6.jpg';


const Blog = () => {
    return (
    <div class='blogs'>
      <Container align='center'>
        <br></br>
        <h2 className='blog'>Blogs</h2>
        <br></br>
          <Row className='cardrow1'>
            <Col lg={6}>
              <Card className="blog-card">
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <br></br>
                <Card.Title>Blockchain : What is it and how is it different from a Hyperledger?</Card.Title>
                <Card.Text>Author : Ranjini Kishen Kumar</Card.Text>
                <Button variant="primary" className='readmore'>Read More</Button>
              </Card.Body>
          </Card>
          </Col>

          <Col lg={6}>
            <Card className="blog-card">
              <Card.Img variant="top" src={blog2} />
              <Card.Body>
              <br></br>
                  <Card.Title>Machine Learning Algorithms-Linear Regression</Card.Title><br></br>
                  <Card.Text>
                  Author : Aanchal Mishra
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
            </Col>
          </Row>
          
          <Row className='cardrow2'>
          <Col lg={6}>
            <Card className="blog-card">
              <Card.Img variant="top" src={blog3} />
              <Card.Body>
              <br></br>
                  <Card.Title>The Famous Turing Test</Card.Title>
                  <Card.Text>
                  Author : Tejaswi Chaudhari
                  </Card.Text>
                  <Button variant="primary" className='readmore'>Read More</Button>
              </Card.Body>
            </Card>
          </Col>

            <Col lg={6}>
            <Card className="blog-card">
              <Card.Img variant="top" src={blog4} />
              <Card.Body>
              <br></br>
                  <Card.Title>Symmetric and Asymmetric Encryption</Card.Title>
                  <Card.Text>
                  Author : Jhanvi Desai
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
            </Col>
          </Row>

          <Row className='cardrow3'>
            <Col lg={6}>
          <Card className="blog-card">
            <Card.Img variant="top" src={blog5} />
            <Card.Body>
            <br></br>
                <Card.Title>Augmented Reality (AR)</Card.Title>
                <Card.Text>
                Author : Ranjini Kishen Kumar
                </Card.Text>
                <Button variant="primary" className='readmore'>Read More</Button>
            </Card.Body>
          </Card>
          </Col>

          <Col lg={6}>
          <Card className="blog-card">
            <Card.Img variant="top" src={blog6}/>
            <Card.Body>
            <br></br>
                <Card.Title>The Invisibility Cloak using OpenCV</Card.Title>
                <Card.Text>
                Author : Sakshi Sanjay Grover
                </Card.Text>
                <Button className='readmore' variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          </Col>
          </Row>
      </Container>
    </div>
    )
}

export default Blog