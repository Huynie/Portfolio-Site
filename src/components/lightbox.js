export const lightbox = () => {

  const lightbox = document.createElement("div"); //creates a new div
  lightbox.id = "lightbox"; //assign id to that div
  document.body.appendChild(lightbox); // appends lightbox to at the end of the body
  
  // FOR DESKTOP LIGHTBOX
  const images = document.querySelectorAll(".mainCarousel .gatsby-image-wrapper img"); //which images to grab

  images.forEach((image) => {
    image.addEventListener("click", () => {
      lightbox.classList.add("active");
      const img = document.createElement("img");
      img.src = image.src;
      // console.log(img.src);
      while (lightbox.firstChild) {
        //removes prev image clicked on from lightbox
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
    });
  });
  
  // FOR MOBILE LIGHTBOX
  const mobileImg = document.querySelectorAll(".carousel__slide img"); //which images to grab

  mobileImg.forEach((image) => {
    image.addEventListener("click", () => {
      lightbox.classList.add("active");
      const img = document.createElement("img");
      img.src = image.src;
      // console.log(img.src);
      while (lightbox.firstChild) {
        //removes prev image clicked on from lightbox
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return; // clicking outside of image deactivate lightbox
    lightbox.classList.remove("active");
  });

}