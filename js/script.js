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

//кнопки для блока сервисов, перелкючение слайдов сервисов
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

//модальные окна
const modalUser = document.querySelector('.modal-user');
const modalMap = document.querySelector('.modal-map');

if (modalUser && modalMap) {

  //переменные для формы
  const modalUserInputs = document.querySelectorAll('.user-form-input');
  const btnModalSubmit = modalUser.querySelector('.user-form-button');
  const btnModalOpen = document.querySelector('.button.button-contacts');
  const btnModalClose = modalUser.querySelector('.button-modal-close');
  let permissionClose = false;

  //переменные для карты
  const btnModalMap = [];
  btnModalMap.push(document.querySelector('.contancts-image-box'));
  btnModalMap.push(document.querySelector('.button-close-modal-map'));

  //события для формы
  btnModalOpen.addEventListener('click', function () {
    modalUser.classList.remove('hidden');
    modalUser.classList.remove('emptyForm');
  });

  btnModalClose.addEventListener('click', function () {
    for (let i = 0; i < modalUserInputs.length; i++) {
      modalUserInputs[i].value = '';
    }
    modalUser.classList.add('hidden');
    modalUser.classList.remove('emptyForm');
  });

  //событие на кнопку Esc - закрывает и карту и форму
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      for (let i = 0; i < modalUserInputs.length; i++) {
        modalUserInputs[i].value = '';
      }
      modalUser.classList.add('hidden');
      modalUser.classList.remove('emptyForm');
      modalMap.classList.add('hidden');
    }
  });

  btnModalSubmit.addEventListener('click', function (evt) {
    for (let i = 0; i < modalUserInputs.length; i++) {
      if (modalUserInputs[i].value) {
        permissionClose = true;
      } else {
        permissionClose = false;
        break;
      }
    }
    if (!permissionClose) {
      evt.preventDefault();
      modalUser.classList.remove('emptyForm');
      modalUser.offsetWidth = modalUser.offsetWidth;
      modalUser.classList.add('emptyForm');
    }
  });

  //событие открытие и закрытие для карты
  btnModalMap.forEach(function (element) {
    if (element) {
      element.addEventListener('click', function () {
        modalMap.classList.toggle('hidden');
      });
    }
  });

}



