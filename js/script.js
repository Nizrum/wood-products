'use strict';

let slides = document.querySelectorAll('.slider__slide');
let buttonPrev = document.querySelector(".slider__button_prev");
let buttonNext = document.querySelector(".slider__button_next");
let bullets = document.querySelectorAll(".slider__bullet");

let currentSlideIndex = 0;

function showSlide(index) {
    document.querySelector(".slider__slide_active").classList.remove("slider__slide_active");
    document.querySelector(".slider__bullet_active").classList.remove("slider__bullet_active");
    slides[index].classList.add('slider__slide_active');
    bullets[index].classList.add('slider__bullet_active');
}

buttonNext.addEventListener('click', function () {
    currentSlideIndex++;
    if (currentSlideIndex == slides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
});

buttonPrev.addEventListener('click', function () {
    currentSlideIndex--;
    if (currentSlideIndex == -1) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
});

for (let bullet of bullets) {
    bullet.addEventListener('click', function () {
        currentSlideIndex = Number(this.dataset.slideIndex);
        showSlide(currentSlideIndex);
    });
}

slides[currentSlideIndex].classList.add("slider__slide_active");
bullets[currentSlideIndex].classList.add("slider__bullet_active");