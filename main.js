import './style.css'


const initSlider = () => {
    console.log('SWIPER');

    return new Swiper('.swiper', {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        direction: "horizontal",
        speed: 400,
        grabCursor: true,
        slidesPerGroup: 1,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            900: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: false,
            },
            1400: {
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: false,
            },
        },
    });
}

document.addEventListener("DOMContentLoaded", (event) => {
    initSlider();

});

