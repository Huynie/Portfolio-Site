export const carousel = () => {
  const track = document.querySelector(".carousel__track");
  const slides = document.querySelectorAll(".carousel__slide");
  const nextButton = document.querySelector(".carousel__nav__button--right");
  const prevButton = document.querySelector(".carousel__nav__button--left");
  const dotsNav = document.querySelector(".carousel__indicContainer");
  const dots = document.querySelectorAll('.carousel__indicator');
  const desc = document.querySelectorAll(".desc__text");

  //Assigns empty description div inner text to be first div's inner text
  desc.forEach((text) => {
    if (text.innerHTML === "") {
      text.innerHTML = desc[0].innerHTML;
    }
  });

  //set id as index of each img slide
  slides.forEach((slide, idx) => {
    slide.id = idx;
  });
  //Swipe slider and dots
  const options = { threshold: 0.5, root: track };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const index = entry.target.id;
      // When slides are pass mid point
      // isIntersecting is triggered
      if (entry.isIntersecting === true) {
        dots[index].classList.add("current-slide");
        desc[index].classList.add("desc-show");
      } else if(entry.isIntersecting === false) {
        dots[index].classList.remove("current-slide");
        desc[index].classList.remove("desc-show");
      }
      // Show or hide nav arrow buttons
      // depending on where indicator is at
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
  //set intersection observer for each img slide
  slides.forEach((image) => {
    observer.observe(image);
  });

  // Dots & Desc function
  dots.forEach((dot, idx) => {
    if (dots.length === 1) {
      return;
    }else{
      dot.onclick = () => {
        slides[idx].scrollIntoView();
      };
    }
  });

  //Arrow button clicks sibling indicator
  nextButton.onclick = () => {
    const currentDot = dotsNav.querySelector(".current-slide");
    currentDot.nextElementSibling.click();
  };
  prevButton.onclick = () => {
    const currentDot = dotsNav.querySelector(".current-slide");
    currentDot.previousElementSibling.click();
  };

  // Set indicator thumbnails
  const CarImg = document.querySelectorAll(".carousel__slide img");
  const TN = document.querySelectorAll("input");

  TN.forEach((dot, idx) => {
    dot.style.backgroundImage = `url(${CarImg[idx].src})`;
  });
};