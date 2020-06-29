/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Одержимость",
        "Ла-ла лэнд",
        "Скотт Пилигрим против..."
    ]
};

const   promo = document.querySelector(".promo__adv"),
        advImg = promo.querySelectorAll("img"),
        genre = document.querySelector(".promo__genre"),
        bg = document.querySelector(".promo__bg"),
        list = document.querySelector(".promo__interactive-list");

advImg.forEach(function(item) {
    item.remove();
});

genre.textContent = "Драмма";


bg.style.cssText = "background:url('img/bg.jpg')";


movieDB.movies.sort();

list.innerHTML = "";

movieDB.movies.forEach(function(film, i){
    list.innerHTML += 
        `<li class="promo__interactive-item">${i + 1} . ${film}
            <div class="delete">
            </div>
        </li>`;
});
console.log(document.body.firstElementChild);