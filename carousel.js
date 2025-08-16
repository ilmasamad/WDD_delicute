// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dots .dot');
const totalSlides = slides.length;

// Auto-advance carousel every 4 seconds
let carouselInterval = setInterval(nextSlide, 4000);

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    slides[index].classList.add('active');
    dots[Math.floor(index / 2)].classList.add('active'); // 2 slides per dot
    
    currentSlide = index;
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % totalSlides;
    showSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(prevIndex);
}

function changeSlide(direction) {
    // Reset interval
    clearInterval(carouselInterval);
    carouselInterval = setInterval(nextSlide, 4000);
    
    if (direction === 1) {
        nextSlide();
    } else {
        prevSlide();
    }
}

function currentSlideFunc(index) {
    // Reset interval
    clearInterval(carouselInterval);
    carouselInterval = setInterval(nextSlide, 4000);
    
    // Show 2 slides per dot click
    const slideIndex = (index - 1) * 2;
    showSlide(slideIndex);
}

// Pause carousel on hover
const carouselContainer = document.querySelector('.hero-carousel');
if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(nextSlide, 4000);
    });
}

// Initialize carousel
if (slides.length > 0) {
    showSlide(0);
}