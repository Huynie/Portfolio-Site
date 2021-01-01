export const slideShowLoop = () => {
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