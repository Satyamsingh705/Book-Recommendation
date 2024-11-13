// Object to store current slide position for each carousel
const carousels = {
    'horror-carousel': 0,
    'fiction-carousel': 0
};

function showSlide(carouselId, index) {
    const carousel = document.getElementById(carouselId);
    const carouselInner = carousel.querySelector('.book-carousel-inner');
    const totalSlides = carousel.querySelectorAll('.book-item').length;
    const visibleSlides = Math.floor(carouselInner.offsetWidth / carousel.querySelector('.book-item').offsetWidth);
    
    // Update the position for this specific carousel
    if (index >= totalSlides - visibleSlides) {
        carousels[carouselId] = totalSlides - visibleSlides;
    } else if (index < 0) {
        carousels[carouselId] = 0;
    } else {
        carousels[carouselId] = index;
    }
    
    carouselInner.style.transform = `translateX(-${carousels[carouselId] * 100 / visibleSlides}%)`;
}

function nextSlide(event) {
    const carouselId = event.target.closest('.book-carousel').id;
    showSlide(carouselId, carousels[carouselId] + 1);
}

function prevSlide(event) {
    const carouselId = event.target.closest('.book-carousel').id;
    showSlide(carouselId, carousels[carouselId] - 1);
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all carousels
    Object.keys(carousels).forEach(carouselId => {
        showSlide(carouselId, 0);
    });

    // Add event listeners to all carousel buttons
    document.querySelectorAll('.carousel-prev, .carousel-next').forEach(button => {
        if (button.classList.contains('carousel-prev')) {
            button.onclick = prevSlide;
        } else {
            button.onclick = nextSlide;
        }
    });
});


