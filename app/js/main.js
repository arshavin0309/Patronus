let swiper1 = new Swiper('.swiper1', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    // mousewheel: { eventsTarget: 'body' },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let swiper2 = new Swiper(".swiper2", {
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

let swiper5 = new Swiper(".swiper5", {
    loop: true,
    freeMode: true,
    spaceBetween: 20,
    slidesPerView: 4,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
});

let tableBtn = document.querySelectorAll(".table__btn");
let tableTable = document.querySelectorAll(".table__table");

let tableShow = document.querySelector(".table__show");
let tableTr = document.querySelectorAll(".table__table tr");

if (tableShow) {
    tableShow.addEventListener("click", () => {
        if (tableShow.textContent === "Показать еще") {
            for (let i = 0; i < tableTr.length; i++) {
                tableTr[i].classList.add("active");
            }
            tableShow.textContent = "Скрыть";
            tableShow.classList.add("active");
        } else {
            for (let i = 0; i < tableTr.length; i++) {
                tableTr[i].classList.remove("active");
            }
            tableShow.textContent = "Показать еще";
            document.getElementById('table').scrollIntoView({ behavior: 'smooth', block: 'center' });

            tableShow.classList.remove("active");
        }
    });
}

for (let i = 0; i < tableBtn.length; i++) {
    tableBtn[i].addEventListener("click", () => {
        tableShow.textContent = "Показать еще";
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

for (let table of document.getElementsByTagName("table")) {
    let tableOverflow = document.createElement("div");
    tableOverflow.className = "table-overflow";
    table.parentElement.replaceChild(tableOverflow, table);
    tableOverflow.appendChild(table);
}

$(function () {
    $(".accordion").accordion({
        active: false,
        collapsible: true,
        heightStyle: "content",
    });
});

let tariffsMore = document.querySelectorAll('.tariffs__more');
let tariffsUl = document.querySelectorAll('.tariffs__list:nth-child(2) ul');
let tariffsItem = document.querySelectorAll('.tariffs__list:nth-child(2) .tariffs__item');
let tariffsBtn = document.querySelectorAll('.tariffs__btn');

for (let i = 0; i < tariffsMore.length; i++) {
    tariffsMore[i].addEventListener('click', () => {
        if (tariffsMore[i].textContent === 'Подробнее') {
            tariffsMore[i].textContent = 'Скрыть';
        } else {
            tariffsMore[i].textContent = 'Подробнее';
        };

        tariffsMore[i].classList.toggle('active');
        tariffsUl[i].classList.toggle('active');
        tariffsItem[i].classList.toggle('active');
    });
};

for (let i = 0; i < tariffsBtn.length; i++) {
    tariffsBtn[i].addEventListener('click', () => {

        for (let n = 0; n < tariffsMore.length; n++) {
            tariffsMore[n].textContent = 'Подробнее';
        }

        for (let n = 0; n < tariffsItem.length; n++) {
            tariffsMore[n].classList.remove('active');
            tariffsUl[n].classList.remove('active');
            tariffsItem[n].classList.remove('active');
        };
    });
};

// Установка title, для wp не понадобиться
if (document.location.pathname === '/') { document.title = 'Главная' };
if (document.location.pathname === '/404.html') { document.title = 'Страница не найдена' };
if (document.location.pathname === '/terms-of-trade.html') { document.title = 'Условия торговли' };
if (document.location.pathname === '/platform.html') { document.title = 'Платформа' };
if (document.location.pathname === '/analytics.html') { document.title = 'Аналитика рынка' };
if (document.location.pathname === '/news.html') { document.title = 'Новости рынка' };
if (document.location.pathname === '/forecasts.html') { document.title = 'Прогнозы рынка' };
if (document.location.pathname === '/currencies.html') { document.title = 'Валюты' };
if (document.location.pathname === '/cryptocurrencies.html') { document.title = 'Криптовалюты' };
if (document.location.pathname === '/stocks.html') { document.title = 'Акции' };
if (document.location.pathname === '/indexes.html') { document.title = 'Индексы' };
if (document.location.pathname === '/about.html') { document.title = 'О Patronus Investments' };
if (document.location.pathname === '/contacts.html') { document.title = 'Контакты' };

// окно с предупреждением о куки
function getCookie(name) {
    let matches = document.cookie.match(
        new RegExp(
            '(?:^|; )' +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
            '=([^;]*)'
        )
    )
    return matches ? decodeURIComponent(matches[1]) : undefined
}

function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        ...options,
    }

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString()
    }

    let updatedCookie =
        encodeURIComponent(name) + '=' + encodeURIComponent(value)

    for (let optionKey in options) {
        updatedCookie += '; ' + optionKey
        let optionValue = options[optionKey]
        if (optionValue !== true) {
            updatedCookie += '=' + optionValue
        }
    }

    document.cookie = updatedCookie
}

if (!getCookie('cookies')) {
    document.querySelector('.cookies').style = 'display: flex'
}

document.querySelector('.cookies .btn').addEventListener('click', () => {
    document.querySelector('.cookies').style = 'display: none'
    setCookie('cookies', 'true', { 'max-age': 3600 * 24 * 365 })
})

// кнопка вверх
document.addEventListener('DOMContentLoaded', () => {
    let goTopBtn = document.querySelector('.upButton');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);

    function trackScroll() {
        let scrolled = window.pageYOffset;

        if (scrolled > 100) {
            goTopBtn.classList.add('show');
        }
        if (scrolled < 100) {
            goTopBtn.classList.remove('show');
        };
    };

    function backToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
});

let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__mobile-box');
let headerMenuItem = document.querySelectorAll('.header .menu > .menu-item');
let headerContainer = document.querySelector('.header > .container');

headerBurger.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
    headerContainer.classList.toggle('active');

    for (let i = 0; i < headerMenuItem.length; i++) {
        headerMenuItem[i].classList.remove('active');
    };
});

for (let i = 0; i < headerMenuItem.length; i++) {
    headerMenuItem[i].addEventListener('click', () => {
        if (headerMenuItem[i].classList.contains('active')) {
            headerMenuItem[i].classList.remove('active');
        } else {
            for (let n = 0; n < headerMenuItem.length; n++) {
                headerMenuItem[n].classList.remove('active');
            };

            headerMenuItem[i].classList.toggle('active');
        };
    });
};