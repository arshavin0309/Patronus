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

    let scrollPos = 0;
    let joinUsImg = document.querySelector('.join-us__img');
    let howContainer = document.querySelector('.how .container');
    let doorsDecor = document.querySelector('.doors__decor');

    $(window).scroll(function () {
        var st = $(this).scrollTop();

        if (st > scrollPos) {
            joinUsImg.classList.remove('reverse');
            howContainer.classList.remove('reverse');
            doorsDecor.classList.remove('reverse');
        } else {
            joinUsImg.classList.add('reverse');
            howContainer.classList.add('reverse');
            doorsDecor.classList.add('reverse');
        };

        scrollPos = st;
    });
});