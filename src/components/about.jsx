import React from 'react';
import NavBar from './nav';
import IG from '../assets/ig_white.png';
import TW from '../assets/tw_white.png';
import FB from '../assets/fb_white.png';
import LI from '../assets/li_white.png';
import AS from '../assets/as_white.png';
import Avatar from '../assets/avatar.jpg';
import Divider from '../assets/Divider.svg';

export default function About () {
    return(
        <>
            <NavBar/>
            <div id="page">
                <br/>
                <div id="profile">
                    <img id="Avatar" src={Avatar} alt="Avatar" />

                    <p id="about">
                        <img src={Divider} alt=""></img>
                        I’m a designer who loves to creatively solve problems and is drawn to learning new skills.
                    </p>

                    <h1 id="name" className="bold">Huy Chau</h1>
                    <p className="light">huychaudesign@gmail.com</p>
                    <div id="social">
                        <a id="social" href="https://www.instagram.com/huynie">
                            <img src={IG} alt="instagram"/>
                        </a>
                        <a id="social" href="https://www.artstation.com/huynie">
                            <img src={AS} alt="artstation"/>
                        </a>
                        <a id="social" href="https://www.linkedin.com/in/huynie">
                            <img src={LI} alt="linkedIn"/>
                        </a>
                        <a id="social" href="https://www.facebook.com/huy.chau.125">
                            <img src={FB} alt="facebook"/>
                        </a>
                        <a id="social" href="https://twitter.com/Huynie">
                            <img src={TW} alt="twitter"/>
                        </a>
                    </div>
                </div>
                <div id="experience">
                    <div id="title">Experience</div>
                    <div id="date">2019</div>
                    <div id="info">
                        <h2 id="company">LOTSAGON</h2>
                        <h3 id="role">Concept designer</h3>
                        <p className="thin">
                            Various freelance opportunities designing environments, props, and characters.
                        </p>
                        <br/>
                    </div>
                    <div id="date">2018</div>
                    <div id="info">
                        <h2 id="company">HOLOSPARK LLC</h2>
                        <h3 id="role">Concept designer</h3>
                        <p className="thin">
                                Designed various environments, props, weapons, keyframe illustrations, UI elements, and
                                storyboards for the game EarthFall (Shipped).
                        </p>
                        <br/>
                    </div>
                    <div id="date">2017</div>
                    <div id="info">
                        <h2 id="company">RUST LTD</h2>
                        <h3 id="role">Concept designer</h3>
                        <p>
                            Designed environments, keyframe illustrations focusing on storytelling, mood, and establishing
                            shots for various VR experiences
                        </p>
                    </div>
                </div>
                <div className="achievements">
                    <div id="title">Achievements</div>
                    <div id="date2">2015</div>
                    <div id="info">
                        <h2 id="school">Bachelors of Arts, Graphic Design</h2>
                        <p>
                            University of Nevada Las Vegas
                        </p>
                    </div>
                    <div id="date2">2019</div>
                    <div id="info">
                        <h2 id="school">Voyage LA Featured Artist</h2>
                        <p><a href="http://voyagela.com/interview/meet-huy-chau/">voyagela.com/interview/meet-huy-chau/</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}