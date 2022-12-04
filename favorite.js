// Código Giovanni

var gliderFilmList = null;
var gliderFavoritesFilmLList = null;

function LoadFilmsGlider() {
    gliderFilmList = new Glider(document.querySelector('.carousel__listafilms'), {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: '.dots',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        }
    })
}

function LoadFavoritesGlider() {
    gliderFavoritesFilmLList = new Glider(document.querySelector('.carousel__listaseries'), {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: '.dots',
        arrows: {
            prev: '.carousel__anterior2',
            next: '.carousel__siguiente2'
        }
    })
}

class Film {
    constructor(title, episodeId, openingCrawl, director, producer, releaseDate) {
        this.title = title;
        this.episodeId = episodeId;
        this.openingCrawl = openingCrawl;
        this.director = director;
        this.producer = producer;
        this.releaseDate = releaseDate;
    }
}

document.addEventListener('DOMContentLoaded', LoadApiFilms, false);

let ArrayOfFilms = [];

function LoadApiFilms() {
    const Http = new XMLHttpRequest();
    const url = 'https://swapi.py4e.com/api/films/';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        if (Http.readyState == 4 && Http.status == 200) {
            const ResObject = JSON.parse(Http.responseText);
            const FilmsResultsApi = ResObject.results;
            FilmsResultsApi.forEach(function (film) {
                let ExtractedFilm = new Film(film.title, film.episode_id,
                    film.opening_crawl, film.director, film.producer, film.release_date);
                ArrayOfFilms.push(ExtractedFilm);
            });
            RenderLoadedFilms();
        } else if (Http.readyState == 4 && Http.status != 200) {
            alert("Error al momento de cargar el API");
        }
    }
}

function ChooseImagenByName(filmName) {
    let imagePath = "";
    switch (filmName) {
        case 'A New Hope':
            imagePath = "imagenes/newhope.png";
            break;
        case 'Attack of the Clones':
            imagePath = "imagenes/rogueone.png";
            break;
        case 'The Force Awakens':
            imagePath = "imagenes/forceawake.png";
            break;
        case 'Return of the Jedi':
            imagePath = "imagenes/lastjedi.png";
            break;
        case 'Revenge of the Sith':
            imagePath = "imagenes/bobafett.png";
            break;
        case 'The Phantom Menace':
            imagePath = "imagenes/clonewars.png";
            break;
        case 'The Empire Strikes Back':
            imagePath = "imagenes/obiwanposter.png";
            break;
        case '':
            imagePath = "imagenes/mandalorian.png";
            break;
    }
    return imagePath;
}

function RenderLoadedFilms() {
    let favorites = localStorage.getItem("favorite_films");
    if (favorites != null) {
        favorites = JSON.parse(favorites);
        ArrayOfFilms.forEach(function (film) {
            document.getElementById("films_carousel").innerHTML += '<div class="div-film">' +
                '<i class="' + (favorites.includes(film.episodeId) ? "fa-solid" : "fa-regular") + ' fa-heart icon-position" onclick="AddToFavorites(' + film.episodeId + ', this)"></i><img src="' + ChooseImagenByName(film.title) + '" class="new"><p>' + film.title + '</p>' +
                '</div>';
        });
    } else {
        ArrayOfFilms.forEach(function (film) {
            document.getElementById("films_carousel").innerHTML += '<div class="div-film">' +
                '<i class="fa-regular fa-heart icon-position" onclick="AddToFavorites(' + film.episodeId + ', this)"></i><img src="' + ChooseImagenByName(film.title) + '" class="new"><p>' + film.title + '</p>' +
                '</div>';
        });
    }
    LoadFilmsGlider();
    RenderFavoriteFilms();
}

function RenderFavoriteFilms() {
    document.getElementById("carousel2").innerHTML = "";
    dynamicSlider = '<div class="carousel__contenedorseries">';
    dynamicSlider += '<button aria-label="anterior" class="carousel__anterior2"><img src="imagenes/prev.png">';
    dynamicSlider += '</button><div class="carousel__listaseries" id="favorite_films_carousel">';
    let favorites = localStorage.getItem("favorite_films");
    if (favorites != null) {
        favorites = JSON.parse(favorites);
        favorites.forEach(function (favoriteId) {
            ArrayOfFilms.forEach(function (film) {
                if (film.episodeId == favoriteId) {
                    dynamicSlider += '<div class="div-film">' +
                        '<img src="' + ChooseImagenByName(film.title) + '" class="new"><p>' + film.title + '</p>' +
                        '</div>';
                }
            });
        });
    }
    dynamicSlider += '</div><button aria-label="siguiente" class="carousel__siguiente2">';
    dynamicSlider += '<img src="imagenes/next.png">';
    dynamicSlider += '</button></div>';
    document.getElementById("carousel2").innerHTML = dynamicSlider;
    gliderFavoritesFilmLList = null;
    LoadFavoritesGlider();
}

function AddToFavorites(id, btn) {
    let favorites = localStorage.getItem("favorite_films");
    let isFavorite;
    if (favorites == null) {
        favorites = [id];
        localStorage.setItem("favorite_films", JSON.stringify(favorites));
        isFavorite = true;
    } else {
        favorites = JSON.parse(favorites);
        if (favorites.includes(id)) {
            const index = favorites.indexOf(id);
            favorites.splice(index, 1);
            isFavorite = false;
        } else {
            favorites.push(id);
            isFavorite = true;
        }
        localStorage.setItem("favorite_films", JSON.stringify(favorites));
    }
    if (isFavorite) {
        btn.classList.add('fa-solid');
        btn.classList.remove('fa-regular');
    } else {
        btn.classList.remove('fa-solid');
        btn.classList.add('fa-regular');
    }
    RenderFavoriteFilms();
}