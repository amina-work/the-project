// ==================== HOME SLIDESHOW ====================
const homeSection = document.querySelector('.home');
const images = [
    './pics/homebg2.jpg',
    './pics/homebg3.jpg'
];
let currentImageIndex = 0;

function changeBackgroundImage() {
  homeSection.classList.remove('fade-in');
  setTimeout(() => {
    homeSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
    homeSection.classList.add('fade-in');
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }, 500);
}

// Initial background image
homeSection.style.backgroundImage = `url(${images[0]})`;

// Change background image every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundImage, 5000);

// ==================== FEATURED CONTENT CAROUSEL ====================
const carouselContainer = document.querySelector('.featured-content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let slideIndex = 0;
const slideWidth = 100 / 4; // Assuming 4 items are displayed at a time

const updateCarouselPosition = () => {
  carouselContainer.style.transform = `translateX(-${slideIndex * slideWidth}%)`;
};

const nextSlide = () => {
  if (slideIndex < 5) {
    slideIndex++;
    updateCarouselPosition();
  }
};

const prevSlide = () => {
  if (slideIndex > 0) {
    slideIndex--;
    updateCarouselPosition();
  }
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
