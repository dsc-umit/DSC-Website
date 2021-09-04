import React from 'react'
// import './testimonials.css'
import { Col ,Container} from 'react-bootstrap'

const Testimonials = () => {
    return (
       
        <div id = "tests">
            <h2 className="testimonials-h" style={{ textAlign: "center" }}>Testimonials</h2>
            <div class="container" style={{ disply: "block" }}>
                <Col lg={12}>
                    <div class="card w-100" style={{ marginLeft: "0px", marginTop: "-5px" }} >

                        <div class="card-header " style={{ textAlign: 'center' }} >
                            <b>Kiran Singh</b>
                        </div>
                        <div class="card-body" >
                            <h5 class="card-title">Former DSC Lead</h5>
                            <p class="card-text">Being the DSC-UMIT lead, I had a wonderful experience! From setting up the club,
                                to making students familiar to it, to organising workshops and seminars, DSC had a
                                great impact on me. During my tenure as the lead, we conducted various events on C++,
                                Java, Android Development, Google Cloud, Design thinking, etc. DSC focuses on the
                                importance of community learning which allows students to experience learning in a
                                more realistic and practical way. To all those looking to help local businesses around you
                                or those looking to change the world, DSC is the platform for you! </p>
                            <div class="card-footer text-muted">
                            </div>

                        </div>



                    </div>

                    <div class="card w-100" style={{ marginLeft: "0px", marginTop: "-5px" }}>
                        <div class="card-header " style={{ textAlign: 'center' }} >
                            <b>Vaishnavi Desai</b>
                        </div>
                        <div class="card-body ">
                            <h5 class="card-title">Former Core Member</h5>
                            <p class="card-text">My experience in DSC core team was an amazing one! Not only did I learn how to manage
                                and organize events, but also experienced the art of conducting sessions and discovered a lot
                                of technical concepts. All in all, it was an exciting and a wonderful learning experience.</p>

                            <div class="card-footer text-muted">

                            </div>

                        </div>
                    </div>
                    <div class="card w-100" style={{ marginLeft: "0px", marginTop: "-5px" }}>
                        <div class="card-header " style={{ textAlign: 'center' }} >
                            <b>Sanjana Joshi</b>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Former Core Member</h5>
                            <p class="card-text">My experience with DSC has been quite vivid, I was exposed to various communities where I
                                could learn and grow. It helped me in boosting my confidence and knowledge about the trending
                                technologies in the market. Also, It gave me an opportunity to endure my technical capabilities
                                to help other people.</p>
                            <div class="card-footer text-muted">

                            </div>


                        </div>
                    </div>

                </Col>



            </div>
        </div>
    )
}

export default Testimonials
