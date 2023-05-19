const carouselSlide = document.querySelector('.carousel-slide');

function nextSlide() {
  carouselSlide.style.transform = 'translateX(-100%)';
}

setInterval(nextSlide, 3000); // Cambia de diapositiva cada 3 segundos