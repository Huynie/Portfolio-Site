import React from 'react';
import NavBar from './nav';
import Footer from './footer';
import IG from '../assets/ig_white.png';
import TW from '../assets/tw_white.png';
import FB from '../assets/fb_white.png';
import LI from '../assets/li_white.png';
import AS from '../assets/as_white.png';
import Avatar from '../assets/avatar.jpg';

export default function About () {
    
    return(
        <>
            <NavBar/>
            <br/>
            <main className="aboutDesktop">
                <div className="section" id="profile">
                    <img className="Avatar" src={Avatar} alt="Avatar" />
                    <h1 className="name bold">Huy Chau</h1>
                    <p className="about">
                        I’m a designer who loves to creatively solve problems and is drawn to learning new skills.
                    </p>
                    <p className="light email">huychaudesign@gmail.com</p>
                    <div className="social">
                        <a href="https://www.instagram.com/huynie">
                            <img src={IG} alt="instagram"/>
                        </a>
                        <a href="https://www.artstation.com/huynie">
                            <img src={AS} alt="artstation"/>
                        </a>
                        <a href="https://www.linkedin.com/in/huynie">
                            <img src={LI} alt="linkedIn"/>
                        </a>
                        <a href="https://www.facebook.com/huy.chau.125">
                            <img src={FB} alt="facebook"/>
                        </a>
                        <a href="https://twitter.com/Huynie">
                            <img src={TW} alt="twitter"/>
                        </a>
                    </div>
                </div>
                <br/>
                <div className="section" id="clients">
                    <div className="title">Clients</div>
                    <ul className="content">
                        <li>X-ite Labs</li>
                        <li>Neom</li>
                        <li>Holospark</li>
                        <li>Rust Ltd</li>
                        <li>Bound</li>
                        <li>Mohawk Group</li>
                        <li>By-Dzign</li>
                    </ul>
                </div>
                <br/>
                <div className="section" id="features">
                    <div className="title">Features</div>
                    <div className="content">
                        <h2 className="school">Voyage LA Featured Artist</h2>
                        <p><a href="http://voyagela.com/interview/meet-huy-chau/">voyagela.com/interview/meet-huy-chau/</a></p>
                    </div>
                </div>
            </main>
            <br/>
            <Footer/>
        </>
    )
}