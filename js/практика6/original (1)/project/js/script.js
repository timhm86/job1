/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики

'use strict';

document.addEventListener( "DOMContentLoaded", () => {
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
            list = document.querySelector(".promo__interactive-list"),
            addForm = document.querySelector("form.add"),
            addInput = addForm.querySelector(".adding__input"),
            checkbox = addForm.querySelector("[type='checkbox']"),
            btn = document.querySelector("button");
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList (movieDB.movies, list);
        }



        event.target.reset();
    });
    
    const deleteAdv = (arr) => {
        arr.forEach(function(item) {
            item.remove();
        });
    };

    const makeChanges = ()  => {
        genre.textContent = "Драмма";    
        bg.style.cssText = "background:url('img/bg.jpg')";
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList (films, parent)  {

        parent.innerHTML = "";
        sortArr(films);
        films.forEach(function(film, i){
            parent.innerHTML += 
             `<li class="promo__interactive-item">${i + 1} . ${film}
                 <div class="delete">
                    </div>
                </li>`;
        
            document.querySelectorAll('.delete').forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    movieDB.movies.splice(i, 1);
                    createMovieList (films, parent);
                });
            });
    });
    }    
    
    // btn.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     if (addInput.value.length > 21) {
    //         movieDB.movies.push(addInput.value.slice(0,21) + "...");
    //         listFilm();
    //     } else {
    //         movieDB.movies.push(addInput.value);
    //         listFilm(); 
    //     }
       
    // });
    
    deleteAdv(advImg);
    makeChanges();
    createMovieList (movieDB.movies, list);
}

);






