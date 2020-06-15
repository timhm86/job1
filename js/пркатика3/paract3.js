'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt ("Сколько фильмов вы уже просмотрели?","");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN (numberOfFilms)) {
        numberOfFilms = +prompt ("Сколько фильмов вы уже просмотрели?","");
    }
}
// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
};

function showMyDB () {
    if (personalMovieDB.privat== false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
 for (let i = 1; i <= 3; i++) {
     personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`);
 }
}
writeYourGenres();

function rememberMyFilms () {
    for (let i = 1; i < 3; i++) {
        const a = prompt ("Один из последних просмотренных фильмов?");
        const b = prompt ("На сколько оцените его??");
        if (a == "" || a == null || a.length > 50 || b == "" || b == null) {
            i--;
        } else {
            personalMovieDB.movies[a]=b;
        }
    }
}
// detectPersonalLevel();
// rememberMyFilms();



function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        alert ("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
        alert ("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert ("Вы киноман");
    } else {
        alert ("Произошла ошибка");
    }
}

showMyDB();

// console.log(personalMovieDB);

