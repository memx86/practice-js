import debounce from 'lodash.debounce';
import { PixabayAPI } from '../services/pixabayAPI';
const api = new PixabayAPI();
const refs = {
  input: document.querySelector('.search'),
  gallery: document.querySelector('.gallery'),
};
const observerOptions = {
  threshold: 0.5,
};
const observer = new IntersectionObserver(handleObserve, observerOptions);
refs.input.addEventListener('input', debounce(handleInput, 300));

function handleInput(e) {
  clearGallery();
  const query = e.target.value.trim();
  if (!query) {
    return;
  }
  api.query = query;
  api.getImages().then(handleSuccess).catch(handleError);
}
function handleSuccess(data) {
  renderGallery(data.hits);
  setObserver();
}
function handleError(error) {
  console.error(error);
}
function clearGallery() {
  refs.gallery.innerHTML = '';
}
function renderGallery(arr) {
  const markup = arr.map(createMarkup).join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
function createMarkup({ webformatURL, largeImageURL, tags }) {
  return `
    <a href="${largeImageURL}">
    <img class="gallery__img" src="${webformatURL}" alt="${tags}" loading="lazy" width="300px"/>
    </a>
    `;
}
function setObserver() {
  observer.observe(refs.gallery.lastElementChild);
}
function handleObserve(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      api.page += 1;
      api.getImages().then(handleSuccess).catch(handleError);
    }
  });
}
