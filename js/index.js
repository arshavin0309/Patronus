document.addEventListener('DOMContentLoaded', () => {
    const swiper1 = new Swiper('.swiper1', {
        loop: true,

        slidesPerView: 2,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});