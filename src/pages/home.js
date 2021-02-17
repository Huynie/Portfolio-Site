import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import {slideShowLoop} from '../components/slideShow';
import Divider from '../assets/Divider.svg';
import '../layout.css';

export default function Home() {
  const {gallery:{nodes}} = useStaticQuery(graphql`
    {
      gallery: allContentfulGallery {
        nodes {
          image {
            fluid(quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  // start slideshow loop
  useEffect(() => {
    if (document.querySelectorAll('.autoSlides__slides')){
        slideShowLoop();
    }
    return () => {
        slideShowLoop();
    }
  }, []);

return(
    <>
        <nav className="home">
                <div className="home__logo">
                    <h1 >Huy Chau</h1>
                    <p>Concept.Design.Illustrate</p>
                </div>
                <ul>
                    <img className="slash" src={Divider} alt="#"/>
                    <li><Link to='/gallery'>Work</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
        </nav>
        <div className="autoSlides">
            {nodes.map((project, idx) => {
                return(
                    <picture key={idx}>
                        <source media="(max-width: 600px)"
                                srcSet={project.image.fluid}/>
                        <Image
                            key={idx} 
                            className="autoSlides__slides" 
                            fluid={project.image.fluid}
                            alt="#"/>            
                    </picture>
                )
            })}
            
        </div>
    </>
    
)
}