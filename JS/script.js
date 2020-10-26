let numbersOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

let personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let lastFilm = prompt('Один из последних просмотренных фильмой?','');
let ratingFirstOne = prompt('Насколько оцените его?','');

// personalMovieDB[movies[lastFilm]] = rating;

let lastSecondFilm = prompt('Один из последних просмотренных фильмой?','');
let ratingSecondOne = prompt('Насколько оцените его?','');

personalMovieDB.movies[lastFilm] = ratingFirstOne;
personalMovieDB.movies[lastSecondFilm] = ratingSecondOne;

console.log(personalMovieDB);