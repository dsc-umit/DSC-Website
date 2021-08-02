import React from 'react'
import {Row, Col, Button, Card} from 'react-bootstrap'


const Blog = () => {
    return (
    <div class='blogs'>
        <h2>Blogs</h2>
        <Row className='cardrow1'>
    <Card style={{ width: '21rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Blockchain : What is it and how is it different from a Hyperledger?</Card.Title>
    <Card.Text>Author : Ranjini Kishen Kumar</Card.Text>
    <Button variant="primary" className='readmore'>Read More</Button>
  </Card.Body>
</Card>

<Card style={{ width: '21rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Machine Learning Algorithms-Linear Regression</Card.Title>
    <Card.Text>
    Author : Aanchal Mishra
    </Card.Text>
    <Button variant="primary" className='readmore'>Read More</Button>
  </Card.Body>
</Card>
</Row>
<Row className='cardrow2'>
<Card style={{ width: '21rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>The Famous Turing Test</Card.Title>
    <Card.Text>
    Author : Tejaswi Chaudhari
    </Card.Text>
    <Button variant="primary" className='readmore'>Read More</Button>
  </Card.Body>
</Card>


<Card style={{ width: '21rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Symmetric and Asymmetric Encryption</Card.Title>
    <Card.Text>
    Author : Jhanvi Desai
    </Card.Text>
    <Button variant="primary">Read More</Button>
  </Card.Body>
</Card>
</Row>
<Row className='cardrow3'>
<Card style={{ width: '21rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Augmented Reality (AR)</Card.Title>
    <Card.Text>
    Author : Ranjini Kishen Kumar
    </Card.Text>
    <Button variant="primary" className='readmore'>Read More</Button>
  </Card.Body>
</Card>


<Card style={{ width: '21rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>The Invisibility Cloak using OpenCV</Card.Title>
    <Card.Text>
    Author : Sakshi Sanjay Grover
    </Card.Text>
    <Button className='readmore' variant="primary">Read More</Button>
  </Card.Body>
</Card>
</Row>
    </div>
    )
}

export default Blog