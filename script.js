const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideInterval = 4000; // 4 seconds

function nextSlide() {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');

    // Move to next slide, looping back to 0
    currentSlide = (currentSlide + 1) % slides.length;

    // Add active class to new slide
    slides[currentSlide].classList.add('active');
}

// Start auto-scroll
setInterval(nextSlide, slideInterval);
