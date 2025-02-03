// Burger menu
let burgerButton = document.querySelector(".menu-icon")
let body = document.body
let menu = document.querySelector('.menu')
let input = document.querySelector(".header__search")

if (burgerButton && menu) {
    burgerButton.addEventListener("click", () => {
        burgerButton.classList.toggle("_active")
        body.classList.toggle("_lock")
        menu.classList.toggle("_active")
        input.classList.toggle("_active")
    })
}


// Swiper slider section welcome
const backgrounds = [
    '/assets/img/shop-hero-1-product-slide-1.jpg',
    '/assets/img/shop-hero-1-product-slide-2.jpg',
];

const slideContents = [
    {
        title: 'Summer Value Pack',
        desc: 'cool / colorful / comfy',
        view: 'T-Shirt / Tops',
    },
    {
        title: 'Winter Collection',
        desc: 'warm / cozy / stylish',
        view: 'Sweaters / Jackets',
    },
];

const swiper = new Swiper('.welcome-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        slideChange: function () {
            const activeIndex = this.realIndex;
            const swiperElement = document.querySelector('.swiper');
            swiperElement.style.backgroundImage = `url(${backgrounds[activeIndex]})`;
            const slideText = document.querySelector('.welcome-slider__text');
            slideText.querySelector('.welcome-slider__title').textContent = slideContents[activeIndex].title;
            slideText.querySelector('.welcome-slider__desc').textContent = slideContents[activeIndex].desc;
            slideText.querySelector('.welcome-slider__view').textContent = slideContents[activeIndex].view;
        }
    }
});
const swiperArrival = new Swiper('.arrival__swiper', {
    spaceBetween: 30,
    loop: false,
    navigation: {
        nextEl: '.arrival__button-prev',
        prevEl: '.arrival__button-next',
    },
    breakpoints: {
        976: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        692: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        482: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
    }
});
