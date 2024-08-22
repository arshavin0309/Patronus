const swiper1 = new Swiper('.swiper1', {
    loop: true,

    slidesPerView: 3,
    spaceBetween: 20,
    // mousewheel: true,
    mousewheel: { eventsTarget: 'body' },
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
let acquaintanceImage = document.querySelector('.acquaintance__image');

$(window).scroll(function () {
    var st = $(this).scrollTop();

    if (st > scrollPos) {
        if (joinUsImg) { joinUsImg.classList.remove('reverse'); };
        if (howContainer) { howContainer.classList.remove('reverse'); };
        if (doorsDecor) { doorsDecor.classList.remove('reverse'); };
        if (acquaintanceImage) { acquaintanceImage.classList.remove('reverse'); };
    } else {
        if (joinUsImg) { joinUsImg.classList.add('reverse'); };
        if (howContainer) { howContainer.classList.add('reverse'); };
        if (doorsDecor) { doorsDecor.classList.add('reverse'); };
        if (acquaintanceImage) { acquaintanceImage.classList.add('reverse'); };
    };

    scrollPos = st;
});