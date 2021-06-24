import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../layout.css';

const Gallery = () => {
  const {gallery:{nodes}} = useStaticQuery(graphql`
    {
      gallery: allContentfulGallery {
        nodes {
          slug
          title
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  console.log(nodes)
  return (
    <>
    <Navbar pageTitle='Gallery'/>
      <div className="gallery">
        {nodes.map((project, idx) => {
            return(
                <Link 
                    className="overlay"
                    key={idx} 
                    to={`/gallery/${project.slug}`}>
                    <div className="text">{project.title}</div>
                        <Image
                          className="zoom"
                          fluid={project.image.fluid}
                          alt={project.title}
                          objectFit='cover'
                          style={{
                            height: '100%'
                          }}
                          />
                </Link>
            )
        })}
    </div>
    <Footer/>
  </>
  );
}

export default Gallery;
