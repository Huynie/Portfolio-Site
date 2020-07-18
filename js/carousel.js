const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const descTrack = document.querySelector('.desc__track');
const desc = Array.from(descTrack.children);
const nextButton = document.querySelector('.carousel__nav__button--right');
const prevButton = document.querySelector('.carousel__nav__button--left');
const dotsNav = document.querySelector('.carousel__indicContainer');
const dots = Array.from(dotsNav.children);


//Projects with only 1 image
if (slides.length === 1) {
    const carouselNav = document.querySelector('.carousel__nav');
    carouselNav.classList.add('is-hidden');
}
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'; //moves the slide by it's width
    currentSlide.classList.remove('current-slide'); //removes the word 'current-slide' from current slide
    targetSlide.classList.add('current-slide'); //which ever slide is targeted, add 'current-slide' to it
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const updateDesc = (currentDesc, targetDesc,) => {
    if (currentDesc.length > 1) {
        currentDesc.classList.remove('current-slide');
        currentDesc.classList.add('hideDesc-text');
        targetDesc.classList.add('current-slide');
        targetDesc.classList.remove('hideDesc-text');
    } else {
        return
    }
    
}
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

/* Const hideNav = (slides, prevButton, nextButton, targetIndex) => {
    if(targetIndex === )
}
 */
// clicking left, move slide left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    const currentDesc = descTrack.querySelector('.current-slide');
    const prevDesc = currentDesc.previousElementSibling;
    //move to the next slide
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
    updateDesc(currentDesc, prevDesc);
})

// clicking right, move slide right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    /* const amountToMove = nextSlide.style.left; */
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    const currentDesc = descTrack.querySelector('.current-slide');
    const nextDesc = currentDesc.nextElementSibling;
    //move to next slide
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
    updateDesc(currentDesc, nextDesc);
})


// clicking nav indicator (the little dots), move to that slide
dotsNav.addEventListener('click' , e => {
    // what indicator was clicked on?
    const targetDot = e.target.closest('input');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const currentDesc = descTrack.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot) //finds the index # of dot clicked on
    const targetSlide = slides[targetIndex]; //target slide IS the slide OF that index # from above ^
    const targetDesc = desc[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
    updateDesc(currentDesc, targetDesc);
})