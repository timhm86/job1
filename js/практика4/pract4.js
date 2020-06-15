'use strict';


const personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    start: function() {
        personalMovieDB.count = +prompt ("Сколько фильмов вы уже просмотрели?","");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN (personalMovieDB.count)) {
            personalMovieDB.count = +prompt ("Сколько фильмов вы уже просмотрели?","");
        }
        personalMovieDB.detectPersonalLevel();
    },
    showMyDB: function() {
        if (personalMovieDB.privat== false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const a = prompt (`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i - 1] = a;
            if ( a ==""|| a == null) {
                i--;
            }
        }
        personalMovieDB.genres.forEach(function(item, i){
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
       },
    rememberMyFilms: function() {
        for (let i = 1; i < 3; i++) {
            const a = prompt ("Один из последних просмотренных фильмов?");
            const b = prompt ("На сколько оцените его??");
            if (a == "" || a == null || a.length > 50 || b == "" || b == null) {
                i--;
            } else {
                personalMovieDB.movies[a]=b;
            }
        }
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10) {
            alert ("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
            alert ("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert ("Вы киноман");
        } else {
            alert ("Произошла ошибка");
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};
