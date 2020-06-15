'use strict';

const numberOfFilms = +prompt ("Сколько фильмов вы уже просмотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
};

if (personalMovieDB.count < 10) {
    alert ("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
    alert ("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert ("Вы киноман");
} else {
    alert ("Произошла ошибка");
}


for (let i = 1; i < 3; i++) {
    const a = prompt ("Один из последних просмотренных фильмов?");
    const b = prompt ("На сколько оцените его??");
    if (a == "" || a == null || a.length > 50 || b == "" || b == null) {
        i--;
    } else {
        personalMovieDB.movies[a]=b;
    }
}


console.log(personalMovieDB);

