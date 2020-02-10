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