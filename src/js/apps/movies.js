import { Notify } from 'notiflix';
import { TMDBApi } from '../services/moviesAPI';

const refs = {
  movies: document.querySelector('.movies'),
  backdrop: document.querySelector('.backdrop'),
  card: document.querySelector('.movie-card'),
  more: document.querySelector('.load-more'),
};
const movieApi = new TMDBApi();

refs.movies.addEventListener('click', onMovieClick);
refs.more.addEventListener('click', onLoadMore);
movieApi.getTrending().then(onSuccess).catch(onError);

function onLoadMore() {
  disableBtn();
  movieApi.getTrending().then(onSuccess).catch(onError);
}
function onSuccess({ page, total_pages, total_results, results }) {
  if (movieApi.page === 2) Notify.success(`${total_results} movies found`);
  renderMovies(results);
  endableBtn();
  if (page >= total_pages) {
    Notify.info("We've reached end of search results");
    disableBtn();
  }
}
function onError(e) {
  disableBtn();
  Notify.failure(e.message);
}
function createMarkup({ id, poster_path, title, name }) {
  const BASE_IMG_URL = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2';
  return `
    <li class="movies__item" data-id=${id}>
    <img class="movies__img" src='${BASE_IMG_URL}${poster_path}' alt="${title || name}"/>
    <div class="movie__bottom">
    <h2 class="movie__title">${title || name}</h2>
    </div>
    </li>
    `;
}
function renderMovies(movies) {
  const markup = movies.map(createMarkup).join('');
  refs.movies.insertAdjacentHTML('beforeend', markup);
}
function onMovieClick(e) {
  if (e.target === e.currentTarget) return;
  const liRef = e.target.closest('li');
  const id = liRef.dataset.id;
  movieApi.getMovie(id).then(renderMovieCard);
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
  release_date,
  popularity,
  vote_average,
  vote_count,
  overview,
}) {
  const BASE_IMG_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
  const date = new Date(release_date).getFullYear();
  return `
    <img class="movie__img" src='${BASE_IMG_URL}${poster_path}' alt="${title || name}"/>
    <div>
    <h2>${title || name}</h2>
    <p>${date}</p>
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
function disableBtn() {
  refs.more.classList.add('is-hidden');
  refs.more.disabled = true;
}
function endableBtn() {
  refs.more.classList.remove('is-hidden');
  refs.more.disabled = false;
}
