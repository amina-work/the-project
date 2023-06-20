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



// ==================== GIVE NAVBAR BACKGROUND IN SECOND SECTION ====================
// Get the navbar element
const navbar = document.querySelector('header');

// Get the position of the second section
const secondSection = document.querySelector('#featured');
const secondSectionTop = secondSection.offsetTop;

// Function to check the scroll position and update the navbar class
function checkScrollPosition() {
  if (window.pageYOffset >= secondSectionTop) {
    navbar.classList.add('navbar-white');
  } else {
    navbar.classList.remove('navbar-white');
  }
}

// Add scroll event listener to check the scroll position
window.addEventListener('scroll', checkScrollPosition);



// ==================== FEATURED CONTENT CAROUSEL ====================

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll(".row")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});




// ==================== SALE TAG TO SCROLL TO SALES SECTION ====================

// Get all elements with the sale-tag class
var saleTags = document.getElementsByClassName('sale-tag');

// Loop through each sale-tag element
for (var i = 0; i < saleTags.length; i++) {
  // Add click event listener to each sale-tag element
  saleTags[i].addEventListener('click', function() {
    // Scroll to the sales section
    document.getElementById('sales').scrollIntoView({ behavior: 'smooth' });
  });
}