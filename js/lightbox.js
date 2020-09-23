const lightbox = document.createElement("div"); //creates a new div
lightbox.id = "lightbox"; //assign id to that div
document.body.appendChild(lightbox); // appends lightbox to at the end of the body

const images = document.querySelectorAll("picture"); //which images to grab

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.children[1].src;
    console.log(img.src);
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
