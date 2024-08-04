let currentSlideIndex = 1;
const slides = document.querySelectorAll('.carousel__item');
const indicators = document.querySelectorAll('.carousel__indicator');

function showSlides(slideIndex) {
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    if(slideIndex > currentSlideIndex) {
        for(let i = 1; i < slideIndex; i++) {
            slides[i - 1].style.display = 'none';
            slides[i - 1].classList.remove('carousel__item-active');
        }
    }
    else {
        for(let i = slideIndex; i <= slides.length; i++) {
            slides[i - 1].style.display = 'block';
            slides[i - 1].classList.remove('carousel__item-active');
        }
    }

    indicators.forEach((indicator) => {
        indicator.classList.remove('carousel__indicator-active');
    });

    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].classList.add('carousel__item-active');
    indicators[slideIndex - 1].classList.add('carousel__indicator-active');

    currentSlideIndex = slideIndex;
}

function nextSlide() {
    let nextSlideIndex = currentSlideIndex + 1;
    showSlides(nextSlideIndex);
}

function currentSlide(slideIndex) {
    showSlides(slideIndex);
}

showSlides(currentSlideIndex);
