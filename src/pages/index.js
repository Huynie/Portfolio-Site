import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from 'gatsby';
import SlideShow from '../components/slideShow';
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
        <SlideShow slides={nodes}/>
    </>
    
)
}