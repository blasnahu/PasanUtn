document.addEventListener('DOMContentLoaded', function () {
    const prevArrow = document.querySelector('.left-arrow');
    const nextArrow = document.querySelector('.right-arrow');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators span');
    let index = 0;

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
        updateIndicators();
    }

    function updateIndicators() {
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    prevArrow.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : items.length - 1;
        updateCarousel();
    });

    nextArrow.addEventListener('click', () => {
        index = (index < items.length - 1) ? index + 1 : 0;
        updateCarousel();
    });

    updateCarousel(); // Inicializar el carrusel
});
