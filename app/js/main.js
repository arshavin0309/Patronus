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

let swiper = new Swiper(".swiper3", {
    spaceBetween: 0,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
});

let swiper4 = new Swiper(".swiper4", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

let tableBtn = document.querySelectorAll(".table__btn");
let tableTable = document.querySelectorAll(".table__table");

let tableShow = document.querySelector(".table__show");
let tableTr = document.querySelectorAll(".table__table tr");

if (tableShow) {
    tableShow.addEventListener("click", () => {
        if (tableShow.textContent === "Смотреть больше") {
            for (let i = 0; i < tableTr.length; i++) {
                tableTr[i].classList.add("active");
            }
            tableShow.textContent = "Скрыть";
            tableShow.classList.add("active");
        } else {
            for (let i = 0; i < tableTr.length; i++) {
                tableTr[i].classList.remove("active");
            }
            tableShow.textContent = "Смотреть больше";
            tableShow.classList.remove("active");
        }
    });
}

for (let i = 0; i < tableBtn.length; i++) {
    tableBtn[i].addEventListener("click", () => {
        tableShow.textContent = "Смотреть больше";
        tableShow.classList.remove('active');

        for (let i = 0; i < tableTr.length; i++) {
            tableTr[i].classList.remove("active");
        }

        for (let n = 0; n < tableBtn.length; n++) {
            tableBtn[n].classList.remove("active");
            tableTable[n].classList.remove("active");
        }

        tableBtn[i].classList.add("active");
        tableTable[i].classList.add("active");
    });
}

// $(function () {
//     $("#accordion").accordion({
//         active: false,
//         collapsible: true,
//         heightStyle: "content",
//     });
// });

for (let table of document.getElementsByTagName("table")) {
    let tableOverflow = document.createElement("div");
    tableOverflow.className = "table-overflow";
    table.parentElement.replaceChild(tableOverflow, table);
    tableOverflow.appendChild(table);
}