import { useState, React } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import './contact.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faHeart, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faFacebook, faGithub, faInstagram, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

    const [templateParams, setTemplateParams] = useState({
        subject: '',
        email_id: '',
		from_name: '',
        message: ''
	});

    const onInputChange = e => {
		setTemplateParams({...templateParams,[e.target.name]: e.target.value})
	}

    const onSubmit = async (e) => {
		e.preventDefault();
            emailjs.send('service_e6s2kp5','template_crdqhmt', templateParams, 'user_hNSJ8XbPIhVIgQ57FFJzw')
                .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                console.log('FAILED...', err);
                });
                swal({
                    title: "Sent Successfully!",
                    text: "Glad to hear from you! We will get back to you as soon possible",
                    icon: "success",
                  });
                setTemplateParams({
                    subject: '',
                    email_id: '',
                    from_name: '',
                    message: ''
                })
    }

    return (
        <div className="contact">
            <br></br>
            <hr></hr>
            <Container>
                <h2 className="lead">Contact us</h2>
                <small>We are open for collaborations!</small>
                <Row>
                    <Col lg={6} sm={12} xs={12}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.483121923021!2d72.82830744981766!3d19.086450178517236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x202d318309cd0d56!2sUsha%20Mittal%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1627838446541!5m2!1sen!2sin" width="100%" style={{border:0}} allowfullscreen="" loading="lazy" className="contact-map"></iframe>
                        <Row>
                            <Col lg={1} sm={2} xs={2}>
                                <FontAwesomeIcon className="contact-icon" size="lg" icon={faAddressCard}/>
                            </Col>
                            <Col className="contact-text">
                                <p>Find us at :<br></br>Usha Mittal Institue Of Technology, SNDT University<br></br>Juhu-Tara Road, Sir Vitthaldas Vidyavihar<br></br>Santacruz west, Mumbai, Maharashtra<br></br>Pin Code - 400049</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={1} sm={2} xs={2}>
                                <FontAwesomeIcon className="contact-icon" size="lg" icon={faPhoneAlt}/>
                            </Col>
                            <Col className="contact-text">
                                <p>Call us : +91 7977244710</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={1} sm={2} xs={2}>
                                <FontAwesomeIcon className="contact-icon" size="lg" icon={faEnvelope}/>
                            </Col>
                            <Col className="contact-text">
                                <p>Email us : dsc.umit@gmail.com</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} sm={12} xs={12}>
                        <Form onSubmit={e => onSubmit(e)}>
                            <Row className="contact-form">
                                <Form.Group as={Col}>
                                    <Form.Control onChange={e => onInputChange(e)} value={templateParams.from_name} name="from_name" className="contact-form-box" placeholder="Your Name" />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Control onChange={e => onInputChange(e)} value={templateParams.email_id} name="email_id" className="contact-form-box" type="email" placeholder="Your Email-id" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="contact-form">
                                <Form.Control onChange={e => onInputChange(e)} value={templateParams.subject} name="subject" className="contact-form-box" placeholder="Enter the Subject" />
                            </Form.Group>

                            <Form.Group className="contact-form">
                                <Form.Control onChange={e => onInputChange(e)} value={templateParams.message} name="message" className="contact-form-box" placeholder="Write your message..." as="textarea" rows={8} />
                            </Form.Group>
                            <Button className="contact-button" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <br></br>
                <div className="class-socials" align="center">
                    <a className="a-socials" href="https://github.com/dsc-umit" target="_blank" rel="noreferrer noopener">
                        <Button className="button-socials"><FontAwesomeIcon className="contact-socials" size="lg" icon={faGithub}/></Button>
                    </a>
                    <a className="a-socials" href="https://www.linkedin.com/company/dsc-umit" target="_blank" rel="noreferrer noopener">
                        <Button className="button-socials"><FontAwesomeIcon className="contact-socials" size="lg" icon={faLinkedin}/></Button>
                    </a>
                    <a className="a-socials" href="https://medium.com/dsc-umit" target="_blank" rel="noreferrer noopener">
                        <Button className="button-socials"><FontAwesomeIcon className="contact-socials" size="lg" icon={faMedium}/></Button>
                    </a>
                    <a className="a-socials" href="https://discord.gg/WxRDeAFxbu" target="_blank" rel="noreferrer noopener">
                        <Button className="button-socials"><FontAwesomeIcon className="contact-socials" size="lg" icon={faDiscord}/></Button>
                    </a>
                    <a className="a-socials" href="https://www.instagram.com/dsc_umit/" target="_blank" rel="noreferrer noopener">
                        <Button className="button-socials"><FontAwesomeIcon className="contact-socials" size="lg" icon={faInstagram}/></Button>
                    </a>
                    <a className="a-socials" href="https://twitter.com/DscUmit" target="_blank" rel="noreferrer noopener">
                        <Button className="button-socials"><FontAwesomeIcon className="contact-socials" size="lg" icon={faTwitter}/></Button>
                    </a>
                    <a className="a-socials" href="https://www.facebook.com/dsc.umit.3" target="_blank" rel="noreferrer noopener">
                        <Button className="button-socials"><FontAwesomeIcon className="contact-socials" size="lg" icon={faFacebook}/></Button>
                    </a>
                </div>
                <div align="center">
                <small align="center">Made with <FontAwesomeIcon color="red" icon={faHeart}/> by Team DSC UMIT 2021'-22'<br></br><i>Illustrations by freepik, unDraw.io</i></small>
                </div>
            </Container>
        </div>
    )
}


export default Contact
