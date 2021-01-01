import React, { useContext, useEffect } from 'react';
import { projectsContext } from './context_api';
import Divider from '../assets/Divider.svg';
import { Link } from "react-router-dom";
import {slideShowLoop} from './js/slideShow';

export default function Home () {
    const { projects } = useContext(projectsContext);

    useEffect(() => {
        if (document.querySelectorAll('.autoSlides__slides')){
            slideShowLoop();
        }
        return () => {
            slideShowLoop();
        }
    }, [])

    // useEffect(()=>{
    //     console.log('start function');
    //     return () => {
    //         console.log('unmount and cleanup')
    //     }
    // },[])

    return(
        <>
            <nav className="home">
                    <div>
                        <h1 className="home__logo">Huy Chau</h1>
                        <p>Concept.Design.Illustrate</p>
                    </div>
                    <ul>
                        <img className="slash" src={Divider} alt="#"></img>
                        <li><Link to={{pathname:"/gallery"}}>Work</Link></li>
                        <li><Link to={{pathname:"/about"}}>About</Link></li>
                    </ul>
            </nav>
            <div className="autoSlides">
                {projects.map((project, idx) => {
                    return(
                        <picture key={idx}>
                            <source media="(max-width: 600px)"
                                    srcSet={project.landing}/>
                            <img 
                                className="autoSlides__slides" 
                                src={project.landing}
                                alt="#"/>            
                        </picture>
                    )
                })}
                
            </div>
        </>
        
    )
}
