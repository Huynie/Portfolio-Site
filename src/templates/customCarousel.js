import React, { useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from 'gatsby-image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// import { carousel } from '../components/carousel';
// import { lightbox } from '../components/lightbox';
import { description } from '../components/description';
import Divider from '../assets/Divider.svg';
import DividerDbl from '../assets/Divider_dbl.svg';
import ArrowL from '../assets/Arrow_L.svg';
import ArrowR from '../assets/Arrow_R.svg';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Project = ({data:{
    project:{
        images,
        title,
        date,
        info:{info}
    }}
    }) => {

    // useEffect(() => {
    //     // Set first description as 'main' description
    //     document.querySelector('.desc__text').id = 'main-desc'; 
    //     carousel();
    //     lightbox();
    //     return () => {
    //         carousel();
    //         lightbox();
    //     }
    // },[]);
    
    useEffect(()=>{
        description();
        // return () =>{
        //     description();
        // }
    })
    
    const secondaryRef = useRef();
    const primaryRef = useRef();

    useEffect(() => {
        primaryRef.current.sync(secondaryRef.current.splide);
    }, [])
    


  return (
      <div className="mobileContainer">
          <Navbar/>
            <div className="carousel">
                <div className="carousel__track-container">
                    <ul className="carousel__track">
                        {images.map((image, idx) => {
                            if(image.vidLink) {
                                return (
                                    <picture  
                                        className="carousel__slide"
                                        key={idx}
                                        >
                                        <source 
                                            media="(max-width: 600px)"
                                            srcSet={image.fluid}
                                        />
                                        <video
                                            controls 
                                            type="video/mp4" 
                                            preload="metadata"  
                                            width="1000" 
                                            height="700" 
                                            src='#'
                                            />
                                        <Image className="vidThumbnail" fluid={image.fluid} alt=""/>
                                    </picture>
                                )
                            }else{
                                return (
                                    <Image
                                        key={idx}
                                        className="carousel__slide"
                                        fluid={image.fluid}
                                        alt=""
                                        imgStyle={{
                                            objectFit: 'contain'
                                        }}
                                    />
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
                        {images.map((image, idx) => {
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
                    <div className="ptitle">{title}</div>
                    <img className="slash" src={Divider} alt="#"/>
                    <div className="desc">
                        <div className="desc__track">
                            {images.map((image, idx) => {
                                return (
                                    <div 
                                        className="desc__text"
                                        key={idx}
                                        >{info}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <img className="slash" src={DividerDbl} alt="#"/>
                    <div className="pdate">{date}</div>
                </div>
            </div>
            <Footer/>
        </div>
  )
}

// export const query = graphql`
//     query GetProject ($slug: String) {
//     project: contentfulProjects(slug: {eq: $slug}) {
//       slug
//       title
//       date
//       info{
//         info
//       }
//       images {
//         fluid(quality: 100) {
//             ...GatsbyContentfulFluid_noBase64
//         }
//         fixed(width:70) {
//             ...GatsbyContentfulFixed_noBase64
//         }
//       }
//     }
//   }
// `;

export default Project
