// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Hero Slider
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('sliderDots');
let currentSlide = 0;
let slideInterval;

// Create dots
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  
  currentSlide = index;
  
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  goToSlide(next);
}

// Auto play
function startSlider() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopSlider() {
  clearInterval(slideInterval);
}

startSlider();

// Pause on hover
document.querySelector('.hero').addEventListener('mouseenter', stopSlider);
document.querySelector('.hero').addEventListener('mouseleave', startSlider);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
