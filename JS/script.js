// let numbersOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

// let personalMovieDB = {
//     count: numbersOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// let lastFilm = prompt('Один из последних просмотренных фильмой?','');
// let ratingFirstOne = prompt('Насколько оцените его?','');

// // personalMovieDB[movies[lastFilm]] = rating;

// let lastSecondFilm = prompt('Один из последних просмотренных фильмой?','');
// let ratingSecondOne = prompt('Насколько оцените его?','');

// personalMovieDB.movies[lastFilm] = ratingFirstOne;
// personalMovieDB.movies[lastSecondFilm] = ratingSecondOne;

// console.log(personalMovieDB);

// let numbersOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

// let personalMovieDB = {
//     count: numbersOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// let lastFilm = prompt('Один из последних просмотренных фильмой?','');
// let ratingFirstOne = prompt('Насколько оцените его?','');

// let lastSecondFilm = prompt('Один из последних просмотренных фильмой?','');
// let ratingSecondOne = prompt('Насколько оцените его?','');

// personalMovieDB.movies[lastFilm] = ratingFirstOne;
// personalMovieDB.movies[lastSecondFilm] = ratingSecondOne;

// console.log(personalMovieDB);

// let questions = [
//     'Сколько фильмов вы уже посмотрели?', 
//     'Один из последних просмотренных фильмов?', 
//     'Насколько оцените его?'];

// let j =  0;
// let answer;
// let answers = [];
// let k = 0;

// for (let i = 0; i <= 4; i++) {
//     answer = prompt(questions[j], '');

//     // Если пользователь отменил ответ на вопрос, то возвращаем в начало
//     if (answer != null) {
//         k = 0;
//         answers[i] = answer;

//         // Проверяем дал ли ответ пользователь
//         if (answer.length == 0) {
//             k++;
//             alert('Не может быть пустым!');
//         }
        
//         // Проверяем, что по вопросам 2 и 4 ответ не длинее 50 символов
//         else if (i == 1 || i == 3) {
//             if (answer.length > 50) {
//                 k++;
//                 alert('Слишком длинный ответ');
//             }
//         }

//         // Дублируем 2 последних вопроса 1 раз
//         if (i == 2) {
//             j = 1;
//         }
//         else {
//             j++;
//         }

//         // Проверяем ответ на первый вопрос, что это число и определяем тип зрителя
//         if (i == 0) {
//             if (+answer < 10) {
//                 alert('Просмотрено довольно мало фильмов');
//             } else if (+answer >= 10 && +answer < 30) {
//                 alert('Вы классический зритель');
//             } else if (+answer > 30) {
//                 alert('Вы киноман');
//             } else {
//                 k++;
//                 alert('Произошла ошибка!');
//             }
//         }

//         if (k != 0) {
//             i--;
//             j--;
//         }

//     } else {
//         --i;
//         alert('Дай мне свой ответ!');
//     }
// }

// let personalMovieDB = {
//     count: answers[0],
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// let lastFilm = answers[1];
// let ratingFirstOne = answers[2];

// let lastSecondFilm = answers[3];
// let ratingSecondOne = answers[4];

// personalMovieDB.movies[lastFilm] = ratingFirstOne;
// personalMovieDB.movies[lastSecondFilm] = ratingSecondOne;

// console.log(personalMovieDB);

"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i =0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('Насколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log('Классический зритель');
    } else if (personalMovieDB >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произвошла ошибка');
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for(let i = 1; i < 4; i++) {
        let favoriteGenre = prompt(`Ваш любимый жанр? #${i}`, '');
        personalMovieDB.genres[i-1] = favoriteGenre;
    }
}

writeYourGenres();

 

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

