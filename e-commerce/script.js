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
