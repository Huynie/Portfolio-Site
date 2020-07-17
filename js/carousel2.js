const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__nav__button--right');
const prevButton = document.querySelector('.carousel__nav__button--left');
const dotsNav = document.querySelector('.carousel__nav__indicators');
const dots = Array.from(dotsNav.children);
//indicator thumbnails
const CarImg = document.querySelectorAll('li.carousel__slide img');
const TN = document.querySelector('input');

//a function that assigns indicator BG url images from slide image src
//I'm trying to find a way to pull indexes of the slides 
//then take the src images from those index
//and then assign in to the indicator BG url img via indicator index
//below is good progress since at least it logs the img src for both TN and CarImg
/* const assignTN = (TN, index) => {
    TN.style.background = 'url(../' + `${CarImg[index].src}` + ');';
    
} */
/* CarImg.forEach(assignTN); */
/* TN.forEach(assignTN);
console.log(CarImg.src); */

for(let index = 0; index <= CarImg.length; index++) {
    /* console.log(slides[index]); */
    const TNIndex = TN[index];
    const CarimgIndex = CarImg[index];
    while (CarimgIndex >= 0/* 'or a number' */) {
        const TNBG = TNIndex.style.background;
        TNBG = 'url(' + `${CarimgIndex.src}` + ');';
        console.log(CarimgIndex);
    }/*  else {
        break;
    }  */
    
}

//So the problem is TN's length is only 0 (or 1)
//because it only pulls active indicator
//probably due to the click event below
console.log(TN); 

const slideWidth = slides[0].getBoundingClientRect().width;

//console.log(slideWidth);

// arrange the slides next to one another
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
// These are all functions
const setSlidePosition = (slide, index=0) => {
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

// clicking left, move slide left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    //move to the next slide
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
})

// clicking right, move slide right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    //move to next slide
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
})


// clicking nav indicator (the little dots), move to that slide
dotsNav.addEventListener('click' , e => {
    // what indicator was clicked on?
    const targetDot = e.target.closest('input');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot); //finds the index # of dot clicked on
    const targetSlide = slides[targetIndex]; //target slide IS the slide OF that index # from above ^

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
    console.log(targetIndex);
})

//creates an image for each inidcator button
/* CarImg.forEach(image => {
    const img = document.createElement('img')
    img.src = image.src
    TN.appendChild(img)
    console.log(TN)
}) */
7
//for each slide image, create an input button with BG image src from slide images in the HTML
/* CarImg.forEach(CarImg => {
    dotsNav.innerHTML = 
    '<input type="button" class="carousel__nav__indicator current__slide">'+
    '<img src=' + `${CarImg.src}` + '></img>' + '</input>';
})
 */

 //Trying to make it where for each slide images,
 // change the BG url image with src from slide images
/* CarImg.forEach(CarImg =>{
    console.log(CarImg.src)

    TN.forEach(TN  =>{
        TN.style.background = 'url(' + `${CarImg.src}` + ')';
        console.log(TN.style.backgroundImage);
    });
    
}); */
/* TN.forEach((TN)  =>{
    CarImg.forEach((CarImg) =>{
        TN.style.background = 'url(' + `${CarImg.src}` + ')';
        console.log(TN.style.backgroundImage);
    })
    
}); */