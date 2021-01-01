import React, { useContext } from 'react';
import { projectsContext } from './context_api';
import { Link } from "react-router-dom";
import NavBar from './nav';

export default function Gallery() {
    const { projects } = useContext(projectsContext);

    return (
        <>
            <NavBar/>
            <div className="gallery">
                {projects.map((project, idx) => {
                    return(
                        <Link 
                            className="overlay"
                            key={idx} 
                            to={{ pathname: `/${project.name}` }}>
                            <div className="text">{project.name}</div>
                            <picture>
                                <source media="(max-width: 600px)"
                                        srcSet={project.thumbnail}/>
                                <img className="zoom" src={project.thumbnail} alt="#"/>
                            </picture>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}