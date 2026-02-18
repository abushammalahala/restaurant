document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".slider").forEach(slider => {

    const track = slider.querySelector(".slider-track");
    const cards = slider.querySelectorAll(".card");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");

    if (!track || !prevBtn || !nextBtn || cards.length === 0) return;

    let currentIndex = 0;
    let cardsPerView = 1;

    function updateCardsPerView() {
      if (window.innerWidth >= 1024) {
        cardsPerView = 3;
      } else if (window.innerWidth >= 768) {
        cardsPerView = 2;
      } else {
        cardsPerView = 1;
      }
    }

    function updateSlider() {
      const cardWidth = cards[0].offsetWidth;
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= cards.length - cardsPerView;
    }

    nextBtn.addEventListener("click", function () {
      if (currentIndex < cards.length - cardsPerView) {
        currentIndex++;
        updateSlider();
      }
    });

    prevBtn.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });

    window.addEventListener("resize", function () {
      updateCardsPerView();
      updateSlider();
    });

    updateCardsPerView();
    updateSlider();

  });

});
window.onerror = function(message, source, lineno, colno, error) {
    return true; 
};


/*************************************** */
const slides = document.querySelectorAll(".reservation-slider .slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 2000);
