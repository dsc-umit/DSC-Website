import React from 'react'
import './Home.css'
import dsc from '../media/dsc.png'
import home from '../media/home.gif';
import Darkhome from '../media/home-dark.gif';

const Home = ({mode}) => {
    return (
        <div class="home" id="home" data-theme={mode ? "dark" : "light"}>
            <div class="homeup">
                <div class="homeleft">
                    <img alt="logo" src={dsc} className="homeleftimg"></img> 
                    <h5>Powered by Google Developers</h5>
                    <div class="homedown">
                        <h1>We inspire learning</h1>
                    </div>
                </div>
            </div>
            <div class="homeright">
                <div class="item">
                    <img alt= "home" src={mode ? Darkhome : home}></img> 
                </div>
            </div>
        </div>
    )
}

export default Home