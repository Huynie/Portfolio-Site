import React, { useEffect, useRef } from "react";
import { graphql } from "gatsby";
import Image from 'gatsby-image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { lightbox } from '../components/lightbox';
import Divider from '../assets/Divider.svg';
import DividerDbl from '../assets/Divider_dbl.svg';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../layout.css';

const Project = ({data:{
    project:{
        images,
        title,
        date,
        info:{info}
    }}
}) => {
    // When HTML build takes place during gatsby build
    // it will return 'Server Render' instead of 'undefined'
    // comment this code out during development
    // if (typeof window === "undefined") {
    //     return <p>Server Render</p>
    // };

    const primaryRef = useRef();
    const secondaryRef = useRef();
    
    useEffect(() => {
        //Sync Splide thumbnail to Splide Carousel
        primaryRef.current.sync(secondaryRef.current.splide);
        //Style Arrows
        const arrows = document.querySelectorAll('.splide__arrow svg');
        arrows.forEach(arrow => {
            arrow.setAttribute('viewBox', '0 0 300 300');
            arrow.setAttribute('height', '100');
            arrow.setAttribute('width', '100');
        });
    },[]);
    
    useEffect(() => {
        lightbox();
        return () => {
          lightbox();
      };
    });
    
    // MULTIPLE DESCRIPTION
    // useEffect(()=>{
    //     description();
    //     return () =>{
    //         description();
    //     }
    // })
    
    

  return (
      <>
        { typeof window === "undefined" ? 
            <p>Server Render</p>
            :
            <>
            <Navbar pageTitle={title}/>
            <div className="carousel mobileContainer">
                <Splide
                    className='mainCarousel'
                    options={{
                    type: 'fade',
                    arrows: false,
                    width: '100vw',
                    height: '55vh',
                    cover: true,
                    perPage: 1,
                    pagination: false,
                    }}
                    ref={primaryRef}
                    >
                    {images.map((image, idx) => {
                        return (
                            <SplideSlide
                                key={idx}
                                style={{
                                    // height: 'auto'
                                }}>
                                <Image
                                    fluid={image.fluid} alt="#"
                                    imgStyle={{
                                        objectFit: 'contain',
                                        maxWidth: 'inherit',
                                        maxHeight: 'inherit',
                                    }}
                                    style={{
                                        objectFit: 'contain',
                                        margin: 'auto',
                                        maxWidth: '1680px',
                                        maxHeight: '55vh',
                                    }}
                                    />
                            </SplideSlide>
                            )
                        })}
                </Splide>
                <Splide
                    className='carousel__nav'
                    ref={secondaryRef}
                    options={{
                        type        : 'slide',
                        rewind      : true,
                        gap         : '.1em',
                        pagination  : false,
                        cover       : true,
                        focus       : false,
                        isNavigation: true,
                        perPage: 3,
                        perMove: 1,
                        width: '100%',
                        height: '5%',
                        fixedWidth  : 150,
                        fixedHeight: 1,
                        arrowPath: 'M116.1,0c-0.7,0.3-1.3,0.7-2,1c-3.3,0.1-5.9,1.5-8,4l0,0c-0.4,0.9-0.5,1.8-0.3,2.7c0.5,1.6,1.3,3,1.9,4.5  c8.2,14.4,15.5,29.3,23.2,43.9c7.6,14.5,15.1,29,22.7,43.5c7.4,14,15,28,22,42.2c1.5,3,3.7,5.5,5,8.6c0.8,1.9,1.4,3.7,0,5.5  c-1.1,2.1-2.2,4.2-3.4,6.3c-9.5,17.5-19.1,35.1-28.5,52.6c-13.9,25.8-28.2,51.3-41.9,77.2c-0.5,2.1-2.2,4.1-0.6,6.4  c0.8,0.7,1.7,1.2,2.6,1.6c5.7,2.9,6.2,5.1,10.4-0.6c4.6-11.1,11.1-21.1,16.6-31.7c5.2-10,10.6-19.9,16.2-29.7  c7.9-14,15.3-28.3,23.1-42.4c5.1-9.1,10-18.4,14.9-27.6c1.7-3.2,3.7-6.3,5.6-9.4c0.8-1.5,2.1-2.9,1.8-4.8c-1.5-4.6-3.9-8.8-6.1-13  C179.2,117.7,167,94.5,155,71.2C143.6,49.1,131.3,27.5,120.7,5c-0.6-1.3-1.4-2.4-2.4-3.4C117.6,1,116.7,0.7,116.1,0z'
                    }}
                    >
                    {images.map((image, idx) => {
                        return (
                            <SplideSlide className='SPLIDESLIDE' key={idx} id={`${idx}`}>
                                <Image
                                    style={{
                                        position: 'static',
                                        objectPosition: "50% 50%",
                                        height: '50%'
                                    }}
                                    fluid={image.fluid} alt="#"/>
                            </SplideSlide>
                        )
                    })}
                </Splide>
                <div className='carousel__track-container carousel__mobile'>
                    <div className='carousel__track'>
                        {images.map((image, idx) => {
                            return(
                                <Image
                                    className="carousel__slide"
                                    key={idx}
                                    fluid={image.fluid} alt="#"
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="pinfo">
                    <div className="ptitle">{title}</div>
                    <img className="slash" src={Divider} alt="#"/>
                    <div className="desc">
                        <div className="desc__track">
                            <div className="desc__text desc-show">{info}</div>
                        </div>
                    </div>
                    <img className="slash" src={DividerDbl} alt="#"/>
                    <div className="pdate">{date}</div>
                </div>
            </div>
        <Footer/>
        </>
        }
    </>
  )
}

export const query = graphql`
    query GetProject ($slug: String) {
    project: contentfulProjects(slug: {eq: $slug}) {
      slug
      title
      date
      info{
        info
      }
      images {
        fluid(quality: 100) {
            ...GatsbyContentfulFluid_noBase64
        }
        fixed(width:70) {
            ...GatsbyContentfulFixed_noBase64
        }
      }
    }
  }
`;

export default Project
