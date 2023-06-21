const parentDiv = document.getElementById('parentDiv');
const sectionItems = parentDiv.getElementsByClassName('sectionItem');
const count = sectionItems.length;
const countElement = document.getElementById('count');
countElement.textContent = `Total items: ${count} items`;

// Add an event listener to the fa-bars icon
const barsIcon = document.querySelector('.fa-bars');
const navbar = document.querySelector('.navbar');

barsIcon.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// Hide the navbar when clicking outside of it
document.addEventListener('click', (event) => {
  const target = event.target;
  const isNavbarItem = target.classList.contains('navbar') || target.closest('.navbar');

  if (!isNavbarItem) {
    navbar.classList.remove('show');
  }
});
