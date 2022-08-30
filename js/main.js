function sliderFoundation() {
    var swiper = new Swiper('.foundation .swiper', {
        slidesPerView: 4,
        spaceBetween: 50,
        loop: true,
        navigation: {
            nextEl: '.foundation .swiper-button-next',
            prevEl: '.foundation .swiper-button-prev',
        },
        pagination: {
            el: ".foundation .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            375: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            },

        }
    })
}





$(document).ready(function() {
    sliderFoundation();
})