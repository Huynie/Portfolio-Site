export const description = () => {
    // const currentImage = document.querySelector('.is-active');
    // const carouselNav = document.querySelector('.carousel__nav');
    const description = document.querySelectorAll('.desc__text')

    const allSlides = document.querySelectorAll('.carousel__nav .splide__slide');

    // console.log(document.querySelector('.carousel__nav .is-active'));

    allSlides.forEach((slide, idx) => {
        // console.log(slide.className);

        slide.classList.forEach((className) => {
            if (className === 'is-active') {
                console.log(description[idx], 'active');
                description[idx].classList.add('desc-show');
            }
        })

        // if (slide.classList === "is-active" ) {
        //     description[idx].classList.add('desc-show');
        //     console.log(slide.className,'active');
        // } else {
        //     description[idx].classList.remove('desc-show');
        //     console.log(slide.classList,'not active')
        // }
    })

}
