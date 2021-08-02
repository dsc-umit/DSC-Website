import React from 'react'
import dsc from '../media/dsc.jpeg'
import about from '../media/about.svg'

const Home = () => {
    return (
       

        <div class="home">
            {/* <h1>how u doin'</h1> */}
            <div class="homeup">
            <div class="homeleft">
                <img alt= "yaha img aana chahiye tha" src={dsc}></img>
                <h5> Powered by Google Developers</h5>
                <div class="homedown">
                    <h1>We inspire learning</h1>
                </div>
            </div>
            <div class="homeright">
                <div class="tilt">
                    <img alt= "yaha svg aana chahiye tha"src={about} ></img>
                </div>
            </div>
            </div>
            
            
        </div>
    )
}

export default Home