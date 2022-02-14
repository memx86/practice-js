import { getTrending, getMovie } from './services/moviesAPI';

const refs = {
  movies: document.querySelector('.movies'),
  backdrop: document.querySelector('.backdrop'),
  card: document.querySelector('.movie-card'),
};
refs.movies.addEventListener('click', onMovieClick);
getTrending().then(renderMovies);

function createMarkup({ id, poster_path, title, name, vote_average }) {
  const BASE_IMG_URL = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2';
  return `
    <li class="movies__item" data-id=${id}>
    <img class="movies__img" src='${BASE_IMG_URL}${poster_path}' alt="${title || name}"/>
    <div>
    <h2>${title || name}</h2>
    <p>User rating: ${vote_average || 'no voting yet'}</p>
    </div>
    </li>
    `;
}
function renderMovies(movies) {
  const markup = movies.map(createMarkup).join('');
  refs.movies.innerHTML = markup;
}

function onMovieClick(e) {
  const liRef = e.target.closest('li');
  const id = liRef.dataset.id;
  getMovie(id).then(renderMovieCard);
  refs.backdrop.classList.add('is-open');
  document.addEventListener('keydown', onEsc);
}
function renderMovieCard(movie) {
  const markup = createMovieCardMarkup(movie);
  refs.card.innerHTML = markup;
}
function createMovieCardMarkup({
  poster_path,
  title,
  name,
  popularity,
  vote_average,
  vote_count,
  overview,
}) {
  const BASE_IMG_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
  return `
    <img src='${BASE_IMG_URL}${poster_path}' alt="${title ?? name}"/>
    <div>
    <h2>${title ?? name}</h2>
    <p>Popularity: ${popularity}</p>
    <p>User rating: ${vote_average || 'no voting yet'}</p>
    <p>Vote count:${vote_count}</p>
    <p>${overview}</p>
    </div>
    
    `;
}
function onEsc(e) {
  if (e.key !== 'Escape') return;
  refs.backdrop.classList.remove('is-open');
  document.removeEventListener('keydown', onEsc);
}
