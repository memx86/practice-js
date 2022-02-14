const KEY = 'fadfbb72581e18342bb7490adda20bdd';
const BASE_URL = 'https://api.themoviedb.org/3';
const SEARCH_MOVIES = `${BASE_URL}/search/movie`;
const MOVIE = `${BASE_URL}/movie`;
const TRENDING = `${BASE_URL}/trending`;
const COMMON = `api_key=${KEY}&language=en-US`;

function fetchUrl(url) {
  return fetch(url).then(r => {
    if (r.ok) return r.json();
    return Promise.reject(r);
  });
}
function getMovies(query) {
  const searchQuery = `?query=${query}`;
  const url = `${SEARCH_MOVIES}${searchQuery}&${COMMON}`;
  return fetchUrl(url).then(r => r.results);
}
function getMovie(id) {
  const url = `${MOVIE}/${id}?${COMMON}`;
  return fetchUrl(url);
}
function getCast(id) {
  const url = `${MOVIE}/${id}/credits?${COMMON}`;
  return fetchUrl(url).then(r => r.cast);
}
function getReviews(id) {
  const url = `${MOVIE}/${id}/reviews?${COMMON}`;
  return fetchUrl(url).then(r => r.results);
}
function getTrending() {
  const url = `${TRENDING}/all/day?${COMMON}`;
  return fetchUrl(url).then(r => r.results);
}
export { fetchUrl, getMovies, getMovie, getCast, getReviews, getTrending };
