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
    <div class='blogs' id="blog">
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
                <a href="https://medium.com/dsc-umit/blockchain-what-is-it-and-how-is-it-different-from-a-hyperledger-8bb5e2e452eb" 
                  style={{color: "white", textDecoration: "none"}} 
                  target="_blank">
                    <Button variant="primary" className='readmore'>Read More</Button>
                </a>
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
                  <a href="https://medium.com/dsc-umit/machine-learning-algorithms-linear-regression-b8c5fc582257" 
                    style={{color: "white", textDecoration: "none"}} 
                    target="_blank">
                      <Button variant="primary" className='readmore'>Read More</Button>
                  </a>
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
                  <a href="https://medium.com/dsc-umit/the-famous-turing-test-91b8de154a12" 
                    style={{color: "white", textDecoration: "none"}} 
                    target="_blank">
                      <Button variant="primary" className='readmore'>Read More</Button>
                  </a>
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
                  <a href="https://medium.com/dsc-umit/symmetric-and-asymmetric-encryption-1004ad5fd61a" 
                    style={{color: "white", textDecoration: "none"}} 
                    target="_blank">
                      <Button variant="primary" className='readmore'>Read More</Button>
                  </a>
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
                <a href="https://medium.com/dsc-umit/augmented-reality-ar-is-one-of-the-greatest-innovation-drifts-at-this-moment-and-its-just-3910aa4131e6" 
                  style={{color: "white", textDecoration: "none"}} 
                  target="_blank">
                    <Button variant="primary" className='readmore'>Read More</Button>
                </a>
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
                <a href="https://medium.com/dsc-umit/the-invisibility-cloak-using-opencv-4be6fc71f7b3" 
                  style={{color: "white", textDecoration: "none"}} 
                  target="_blank">
                    <Button variant="primary" className='readmore'>Read More</Button>
                </a>
            </Card.Body>
          </Card>
          </Col>
          </Row>
      </Container>
    </div>
    )
}

export default Blog