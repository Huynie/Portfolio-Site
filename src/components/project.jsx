import React, { useEffect, useContext } from 'react';
import { carousel } from './js/carousel';
import { projectsContext } from './context_api';
import Divider from '../assets/Divider.svg';
import DividerDbl from '../assets/Divider_dbl.svg';
import ArrowL from '../assets/Arrow_L.svg';
import ArrowR from '../assets/Arrow_R.svg';
import NavBar from './nav';

export default function Projects( props ) {
    const { projects } = useContext(projectsContext);
    // select project based on id passed from gallery link when clicked
    const selectedProject = projects[props.location.state.idx];
    
    useEffect(() => {
        carousel();
    },[]);

    return (
        <>
            <NavBar/>
            <div className="carousel__track-container">
                <ul className="carousel__track">
                    {selectedProject.image.map((image, idx) => {
                        if(image.vidLink) {
                            return (
                                <picture  
                                    className="carousel__slide"
                                    key={idx}
                                    >
                                    <source 
                                        media="(max-width: 600px)"
                                        srcset={image.url}
                                    />
                                    <video
                                        controls 
                                        type="video/mp4" 
                                        preload="metadata"  
                                        width="1000" 
                                        height="700" 
                                        src={image.vidLink}
                                        />
                                    <img src={image.url} alt=""/>
                                </picture>
                            )
                        }else{
                            return (
                                <picture key={idx} className="carousel__slide">
                                    <source 
                                        media="(max-width: 600px)"
                                        srcSet={image.url}/>
                                    <img src={image.url} alt=""/>
                                </picture>
                            )
                        }
                    })}
                </ul>
            </div>
            <div className="carousel__nav">
                <button className="carousel__nav__button carousel__nav__button--left is-hidden">
                    <img src={ArrowL} alt=""></img>
                </button>
                <div className="carousel__indicContainer">
                    {selectedProject.image.map((image, idx) => {
                        return (
                            <input
                                key={idx}
                                type="button" 
                                className="carousel__indicator"
                                >
                            </input>
                        )
                    })}
                </div>
                <button className="carousel__nav__button carousel__nav__button--right">
                    <img src={ArrowR} alt=""></img>
                </button>
            </div>
            <div className="pinfo">
                <div className="ptitle">{selectedProject.name}</div>
                <img className="slash" src={Divider} alt="#"/>
                <div className="desc">
                    <div className="desc__track">
                        {selectedProject.image.map((image, idx) => {
                            return (
                                <div 
                                    className="desc__text"
                                    key={idx}
                                    >{image.caption}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <img className="slash" src={DividerDbl} alt="#"/>
                <div className="pdate">{selectedProject.date}</div>
            </div>

        </>
    );
}