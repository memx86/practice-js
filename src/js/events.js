import { fetchEvents } from './services/eventsAPI';
const refs = {
  events: document.querySelector('.events'),
  prevBtn: document.querySelector("[data-btn='prev']"),
  nextBtn: document.querySelector("[data-btn='next']"),
  linkList: document.querySelector('.link-list'),
};

let listFirstPage = 1;
let totalPages = null;

fetchEvents().then(handleSuccess).catch(handleError);
refs.prevBtn.addEventListener('click', onPrevBtnClick);
refs.nextBtn.addEventListener('click', onNextBtnClick);

function handleSuccess(res) {
  const events = res._embedded?.events;
  totalPages = res.page?.totalPages;
  renderList(events);
}
function renderList(events = []) {
  const markup = events.map(createMarkup).join('');
  refs.events.insertAdjacentHTML('beforeend', markup);
}
function createMarkup({ name, images = [], dates, url }) {
  const { url: imageUrl } = images.find(({ ratio, width }) => ratio === '3_2' && width === 305);
  return `
    <li class="events__item">
    <a href="${url}">
    <img src="${imageUrl}" alt="${name}" width="300" />
    <div>
    <p>${name}</p>
    <p>${new Date(dates?.start?.localDate).toLocaleDateString()} ${dates?.start?.localTime}</p>
    </div>
    </a>
    </li>
    `;
}

function handleError(err) {
  console.error(err);
}

function onPrevBtnClick() {
  if (listFirstPage <= 1) return;

  refs.nextBtn.disabled = false;
  const linksRef = document.querySelectorAll('.link-list .link');

  if (linksRef.length < 5) {
    createList(listFirstPage, listFirstPage + 5);
    return;
  }

  changeLinksText(-5, linksRef);
  if (listFirstPage === 1) {
    refs.prevBtn.disabled = true;
  }
}
function onNextBtnClick() {
  if (listFirstPage > totalPages) return;

  refs.prevBtn.disabled = false;
  const linksRef = document.querySelectorAll('.link-list .link');
  const lastPage = listFirstPage + 4;
  const pages = totalPages - lastPage;

  if (pages < 5) {
    createList(lastPage + 1, totalPages + 1);
    refs.nextBtn.disabled = true;
    return;
  }

  changeLinksText(5, linksRef);
}

function changeLinksText(num, refs) {
  listFirstPage += num;
  refs.forEach((link, index) => (link.textContent = listFirstPage + index));
}

function createList(first, last) {
  refs.linkList.innerHTML = '';
  let markup = '';
  for (let i = first; i < last; i += 1) {
    markup += createLinkMarkup(i);
  }
  refs.linkList.insertAdjacentHTML('beforeend', markup);
}

function createLinkMarkup(num) {
  return `
    <li class="link-list__item">
      <a class="link" href="">${num}</a>
    </li>
    `;
}
