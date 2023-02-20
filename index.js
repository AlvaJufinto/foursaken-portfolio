const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

// Duplicate images to create infinite effect
carouselSlide.innerHTML += carouselSlide.innerHTML;

let counter = 0;
const slideWidth = carouselImages[0].clientWidth;

// Position the carousel slide
carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

function runCarousel() {
  // Move to the next image
  if (counter >= carouselImages.length / 2) {
    counter = 0;
  } else {
    counter++;
  }

  // Animate the slide
  carouselSlide.style.transition = "transform 0.8s ease-in-out";
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

setInterval(runCarousel, 3000);
