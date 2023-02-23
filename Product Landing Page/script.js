const navLinks = document.querySelectorAll('.nav-link');

function scrollToSection(event) {
event.preventDefault();
const section = document.querySelector(event.target.hash);
section.scrollIntoView({ behavior: 'smooth' });
}

navLinks.forEach(link => {
link.addEventListener('click', scrollToSection);
});

window.addEventListener('scroll', function() {
    let topBar = document.querySelector('#header');
    if (window.scrollY > 0) {
        topBar.style.backgroundColor = '#fff';
    }
    else {
        topBar.style.backgroundColor = 'rgba(255,255,255,0.9)';
    }
  });

  const images = ['image4.png', 'image2.png', 'image3.png'];
  let index = 0;
  
  const imageObjects = [];
  for (const image of images) {
    const img = new Image();
    img.src = `media/artists works/${image}`;
    imageObjects.push(img);
  }
  
  setInterval(() => {
    const imageUrl = `url('media/artists works/${images[index]}')`;
    document.getElementById('overview').style.backgroundImage = `url('media/kanban_movie_mask.png'), ${imageUrl}`;
    index = (index + 1) % images.length;
  }, 5000);

  const sections = document.querySelectorAll('.fade-in');

const checkVisibility = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const isVisible = (sectionTop < window.innerHeight) && (sectionBottom >= 0);

    if (isVisible) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
