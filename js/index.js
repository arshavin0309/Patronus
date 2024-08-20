document.addEventListener('DOMContentLoaded', () => {
    const swiper1 = new Swiper('.swiper1', {
        loop: true,

        slidesPerView: 3,
        spaceBetween: 20,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var swiper2 = new Swiper(".swiper2", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
});