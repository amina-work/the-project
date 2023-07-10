/////////////////////////////////// Work images
document.querySelectorAll('.works img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
})
document.querySelector('.popup-img span').onclick = () =>{
    document.querySelector('.popup-img').style.display = 'none';
}


const toggleArrow = document.querySelector('.toggle-arrow');
const blogTOC = document.querySelector('.blog-toc');

toggleArrow.addEventListener('click', function() {
    blogTOC.classList.toggle('open');
});

// Get all the headings inside the blog-text container
const headings = document.querySelectorAll('.blog-text h2');
// Generate the table of contents
const toc = document.getElementById('toc');
headings.forEach((heading, index) => {
    const anchor = document.createElement('a');
    anchor.href = `#section-${index}`;
    anchor.textContent = heading.textContent;
    toc.appendChild(anchor);

    // Add an id to the heading for linking purposes
    heading.id = `section-${index}`;
});



const navItems = document.querySelector('.nav');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

// open nav dropdown
const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}
// close nav dropdown
const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}
openNavBtn.addEventListener('click', openNav); //call the openNav function
closeNavBtn.addEventListener('click', closeNav); //call the closeNav function



///////////////////////////////////// blog Page
function redirectToBlog() {
    window.location.href = "./blog.html";
}





