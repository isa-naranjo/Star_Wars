var gliderFavoritesFilmLList = null;

document.addEventListener('DOMContentLoaded', LoadApiFilms, false);

let ArrayOfFilms = [];

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
            RenderFavoriteFilms();
        } else if (Http.readyState == 4 && Http.status != 200) {
            alert("Error al momento de cargar el API");
        }
    }
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

function RenderFavoriteFilms() {
    document.getElementById("filmscontainer").innerHTML = "";
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
    document.getElementById("filmscontainer").innerHTML = dynamicSlider;
    gliderFavoritesFilmLList = null;
    LoadFavoritesGlider();
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