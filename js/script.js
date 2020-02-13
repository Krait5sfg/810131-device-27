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


//кнопки для блоков сервисов, перелкючение слайдов сервисов
const serviceButtons = document.querySelectorAll('.button.service-button');

serviceButtons.forEach(element => {
    element.addEventListener('click', function () {
        serviceButtons.forEach(element => {
            element.classList.remove('active');
        });
        element.classList.add('active');
    });

    element.addEventListener('focus', function () {
        serviceButtons.forEach(element => {
            element.classList.remove('active');
        });
        element.classList.add('active');
    });

});

