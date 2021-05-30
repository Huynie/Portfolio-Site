import React, { useEffect } from "react";
import Image from 'gatsby-image';

const SlideShow = ({slides}) => {
    
    const slideShowLoop = () => {
        let slideIndex = 0;
        const slides = document.querySelectorAll('.autoSlides__slides');
        // When unmounting in react, 
        // 'slides' still return empty array
        // hence this logic is needed or 
        // it'll try to run line 10 which will break
        if(slides.length === 0){
            return
        } else {
            // Set 'show' class for first img
            slides[0].classList.toggle('show');

            const nextImg = () => {
                const currentImg = document.querySelector('.show');
                // When unmounting in react, 
                // 'currentImg' will be undefined
                // hence this logic is needed 
                if(currentImg){
                    currentImg.classList.toggle('show');
                    slides[slideIndex].classList.toggle('show');
                    
                    if(slideIndex >= slides.length - 1 ) {
                        slideIndex = 0;
                    }else {
                        slideIndex += 1;
                    }
                    // delay function calling itself
                    // to set loop in motion
                    setTimeout(nextImg, 2000);
                }else{
                    return
                }
            }
            nextImg();
        }
    };

    // start slideshow loop
    useEffect(() => {
        if (document.querySelectorAll('.autoSlides__slides')){
            slideShowLoop();
        }
        return () => {
            slideShowLoop();
        }
    }, []);
    
  return (
    <div className="autoSlides">
        {slides.map((project, idx) => {
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
  );
}

export default SlideShow;
