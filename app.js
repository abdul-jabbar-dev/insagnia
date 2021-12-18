var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.3,
    spaceBetween: 40,
    centeredSlides: true,
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, breakpoints: {
        0: {
            slidesPerView: 1.1,
            spaceBetween: 5,
        },
        640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    },
});
var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 2,
    spaceBetween: 40,
    centeredSlides: true,
    
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    }, breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
    },
});
