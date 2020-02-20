// кнопка в форме поиска
const searchForm = document.querySelector('.search-form');
searchForm.elements[0].addEventListener('focus', function () {
    searchForm.elements[1].classList.remove('hidden');
    searchForm.elements[1].addEventListener('blur', function () {
        searchForm.elements[1].classList.add('hidden');
    });
});
searchForm.addEventListener('mouseleave', function () {
    searchForm.elements[0].value = "";
    searchForm.elements[0].blur();
    searchForm.elements[1].classList.add('hidden');
});
searchForm.addEventListener('click', function () {
    searchForm.elements[0].focus();
});

// кнопка Каталог товаров
const catalogBtn = document.querySelector('.main-list-item-catalog button');
const hiddenMenu = document.querySelector('.header-popup-container');
catalogBtn.addEventListener('focus', function () {
    hiddenMenu.classList.remove('hidden');
});
catalogBtn.addEventListener('mouseenter', function () {
    hiddenMenu.classList.remove('hidden');
    hiddenMenu.addEventListener('mouseleave', function () {
        this.classList.add('hidden');
    });
});

//код чтобы в IE 11 работал forEach
if (typeof NodeList.prototype.forEach !== 'function') {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

//переключение слайдов
const sliders = document.querySelectorAll('.promo-slide');
const slideButtons = document.querySelectorAll('.promo-slide-toggle-button');
slideButtons.forEach(function (element) {
    element.addEventListener('click', function () {
        let dataSlide = element.getAttribute('data-slide');
        sliders.forEach(function (element) {
            if (dataSlide === element.getAttribute('data-slide')) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        });
    });
});

//кнопки для блоков сервисов, перелкючение слайдов сервисов
const serviceSliders = document.querySelectorAll('.service-slide');
const serviceButtons = document.querySelectorAll('.button.service-button');
serviceButtons.forEach(function (element) {
    element.addEventListener('click', function () {
        let dataSlide = element.getAttribute('data-slide');
        serviceSliders.forEach(function (element) {
            if (dataSlide === element.getAttribute('data-slide')) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        });
        serviceButtons.forEach(function (element) {
            element.classList.remove('active');
        });
        element.classList.add('active');
    });
});

//кнопки сортировки в inner.html
// const sortingList = document.querySelectorAll('.sorting-list-item');
// sortingList.forEach(function (element) {
//     element.addEventListener('click', function () {
//         sortingList.forEach(function (element) {
//             element.classList.remove('current');
//         });
//         element.classList.add('current');
//     });
// });

//кнопки для модального окна данные от пользователя (открытие и закрытие)
const modalUser = document.querySelector('.modal-user');
btnModalUser = [];
btnModalUser.push(document.querySelector('.button.button-contacts'));
btnModalUser.push(document.querySelector('.button-modal-close'));
btnModalUser.forEach(function (element) {
    element.addEventListener('click', function () {
        modalUser.classList.toggle('hidden');
    });
});

// // модальное окно с картой
const modalMap = document.querySelector('.modal-map');
const btnModalMap = [];
btnModalMap.push(document.querySelector('.contancts-image-box'));
btnModalMap.push(document.querySelector('.button-close-modal-map'));
btnModalMap.forEach(function (element) {
    element.addEventListener('click', function () {
        modalMap.classList.toggle('hidden');
    });
});

