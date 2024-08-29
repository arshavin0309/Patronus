let swiper1 = new Swiper('.swiper1', {
    loop: true,

    slidesPerView: 3,
    spaceBetween: 20,
    mousewheel: { eventsTarget: 'body' },
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

let scrollPos = 0;
let joinUsImg = document.querySelector('.join-us__img');
let howContainer = document.querySelector('.how .container');
let doorsDecor = document.querySelector('.doors__decor');
let acquaintanceImage = document.querySelector('.acquaintance__image');
let banner = document.querySelector('.banner');
let traidingPlatformImage = document.querySelector('.traiding-platform__image');
let platformsItem = document.querySelector('.platforms__item:nth-child(3)');
let howWhite = document.querySelector('.how-white');
let whatAreCryptocurrenciesImage = document.querySelector('.what-are-cryptocurrencies__image');
let whatAreStocksImage = document.querySelector('.what-are-stocks__image');
let startInvestingImage = document.querySelector('.start-investing__image');
let whatAreIndexesImage = document.querySelector('.what-are-indexes__image');

$(window).scroll(function () {
    var st = $(this).scrollTop();

    if (st > scrollPos) {
        if (joinUsImg) { joinUsImg.classList.remove('reverse'); };
        if (howContainer) { howContainer.classList.remove('reverse'); };
        if (doorsDecor) { doorsDecor.classList.remove('reverse'); };
        if (acquaintanceImage) { acquaintanceImage.classList.remove('reverse'); };
        if (banner) { banner.classList.remove('reverse'); };
        if (traidingPlatformImage) { traidingPlatformImage.classList.remove('reverse'); };
        if (platformsItem) { platformsItem.classList.remove('reverse'); };
        if (howWhite) { howWhite.classList.remove('reverse'); };
        if (whatAreCryptocurrenciesImage) { whatAreCryptocurrenciesImage.classList.remove('reverse'); };
        if (whatAreStocksImage) { whatAreStocksImage.classList.remove('reverse'); };
        if (startInvestingImage) { startInvestingImage.classList.remove('reverse'); };
        if (whatAreIndexesImage) { whatAreIndexesImage.classList.remove('reverse'); };
    } else {
        if (joinUsImg) { joinUsImg.classList.add('reverse'); };
        if (howContainer) { howContainer.classList.add('reverse'); };
        if (doorsDecor) { doorsDecor.classList.add('reverse'); };
        if (acquaintanceImage) { acquaintanceImage.classList.add('reverse'); };
        if (banner) { banner.classList.add('reverse'); };
        if (traidingPlatformImage) { traidingPlatformImage.classList.add('reverse'); };
        if (platformsItem) { platformsItem.classList.add('reverse'); };
        if (howWhite) { howWhite.classList.add('reverse'); };
        if (whatAreCryptocurrenciesImage) { whatAreCryptocurrenciesImage.classList.add('reverse'); };
        if (whatAreStocksImage) { whatAreStocksImage.classList.add('reverse'); };
        if (startInvestingImage) { startInvestingImage.classList.add('reverse'); };
        if (whatAreIndexesImage) { whatAreIndexesImage.classList.add('reverse'); };
    };

    scrollPos = st;
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

// Установка title, для wp не понадобиться
if(document.URL === 'http://localhost:3000/') {document.title = 'Главная'};
if(document.URL === 'http://localhost:3000/404.html') {document.title = 'Страница не найдена'};
if(document.URL === 'http://localhost:3000/terms-of-trade.html') {document.title = 'Условия торговли'};
if(document.URL === 'http://localhost:3000/platform.html') {document.title = 'Платформа'};
if(document.URL === 'http://localhost:3000/analytics.html') {document.title = 'Аналитика рынка'};
if(document.URL === 'http://localhost:3000/news.html') {document.title = 'Новости рынка'};
if(document.URL === 'http://localhost:3000/forecasts.html') {document.title = 'Прогнозы рынка'};
if(document.URL === 'http://localhost:3000/currencies.html') {document.title = 'Валюты'};
if(document.URL === 'http://localhost:3000/cryptocurrencies.html') {document.title = 'Криптовалюты'};
if(document.URL === 'http://localhost:3000/stocks.html') {document.title = 'Акции'};
if(document.URL === 'http://localhost:3000/indexes.html') {document.title = 'Индексы'};
if(document.URL === 'http://localhost:3000/about.html') {document.title = 'О Patronus Investments'};
if(document.URL === 'http://localhost:3000/contacts.html') {document.title = 'Контакты'};