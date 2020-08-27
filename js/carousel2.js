const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__nav__button--right");
const prevButton = document.querySelector(".carousel__nav__button--left");
const dotsNav = document.querySelector(".carousel__indicContainer");
const dots = Array.from(dotsNav.children);

//set id as index of each slide
slides.forEach((slide, idx) => {
  slide.id = idx;
});
//Swipe slider and dots
const options = { threshold: 0.5, root: track };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const index = entry.target.id;
    if (entry.isIntersecting === true) {
      dots[index].classList.add("current-slide");
    } else {
      dots[index].classList.remove("current-slide");
    }
    if (entry.isIntersecting === true && index > 0) {
      prevButton.classList.remove("is-hidden");
    } else if (entry.isIntersecting === true || index === 0) {
      prevButton.classList.add("is-hidden");
    }
    if (entry.isIntersecting === true && index < slides.length - 1) {
      nextButton.classList.remove("is-hidden");
    } else if (entry.isIntersecting === true && index >= slides.length - 1) {
      nextButton.classList.add("is-hidden");
    }
  });
}, options);
slides.forEach((image) => {
  observer.observe(image);
});
//Dots function
dots.forEach((dot, idx) => {
  dot.onclick = function click() {
    slides[idx].scrollIntoView({ block: "center", inline: "center" });
  };
});
//Arrow button functions
nextButton.onclick = () => {
  const currentDot = dotsNav.querySelector(".current-slide");
  currentDot.nextElementSibling.click();
  console.log(currentDot.id);
};
prevButton.onclick = () => {
  const currentDot = dotsNav.querySelector(".current-slide");

  currentDot.previousElementSibling.click();
};

//indicator thumbnails
const CarImg = document.querySelectorAll(".carousel__slide img");
const TN = document.querySelectorAll("input");

TN.forEach((dot, idx) => {
  dot.style.backgroundImage = `url(${CarImg[idx].src})`;
});
