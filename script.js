let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
// JavaScript to handle click event for flipping
document.querySelector('.read-more-btn').addEventListener('click', function() {
    document.querySelector('.front').style.transform = 'rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'rotateY(0)';
});

document.querySelector('.back-btn').addEventListener('click', function() {
    document.querySelector('.front').style.transform = 'rotateY(0)';
    document.querySelector('.back').style.transform = 'rotateY(180deg)';
});


function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active-slide');
        if (index === slideIndex) {
            slide.classList.add('active-slide');
        }
    });
}

function moveSlide(n) {
    currentSlide = (currentSlide + n + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto slide (optional)
setInterval(() => {
    moveSlide(1);
}, 5000); // Slide every 5 seconds

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
