import React from 'react'
import './Home.css'
import dsc from '../media/dsc.jpeg'
import about from '../media/about.svg'

const Home = () => {
    return (
        <div class="home">
            <div class="homeup">
                <div class="homeleft">
                    <img alt="logo" src={dsc}></img>
                    <h5>Powered by Google Developers</h5>
                    <div class="homedown">
                        <h1>We inspire learning</h1>
                    </div>
                </div>
                <div class="homeright">
                    <div class="tilt">
                        <img alt="girl-graphic" src={about}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home