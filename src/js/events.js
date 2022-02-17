import { fetchEvents } from './services/eventsAPI';
const refs = {
  events: document.querySelector('.events'),
  prevBtn: document.querySelector("[data-btn='prev']"),
  nextBtn: document.querySelector("[data-btn='next']"),
  linkList: document.querySelector('.link-list'),
};
// refs.links = refs.linkList.querySelectorAll('.link');
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
function createMarkup({ name, images = [] }) {
  return `
    <li>
    <img src="${images[0]?.url}" alt="${name}" width="300" />
    <p>Title: ${name}</p>
    </li>
    `;
}

function handleError(err) {
  console.error(err);
}

function onPrevBtnClick() {
  refs.nextBtn.disabled = false;

  const linksRef = document.querySelectorAll('.link-list .link');
  const prevPage = Number(linksRef[0].textContent);
  if (linksRef.length < 5) {
    createList(prevPage);
  }

  changeLinksText(-5, linksRef);
  if (linksRef[0].textContent === '1') {
    refs.prevBtn.disabled = true;
  }
}
function onNextBtnClick() {
  refs.prevBtn.disabled = false;
  const linksRef = document.querySelectorAll('.link-list .link');
  const lastPage = Number(linksRef[4].textContent);
  const pages = totalPages - lastPage;
  if (pages < 5) {
    refs.linkList.innerHTML = '';
    let markup = '';
    for (let i = lastPage + 1; i <= totalPages; i += 1) {
      markup += createLinksMarkup(i);
    }
    refs.linkList.insertAdjacentHTML('beforeend', markup);
    refs.nextBtn.disabled = true;
    return;
  }
  changeLinksText(5, linksRef);
}

function changeLinksText(num, refs) {
  refs.forEach(link => (link.textContent = Number(link.textContent) + num));
}

function createList(prevPage) {
  refs.linkList.innerHTML = '';
  let markup = '';
  for (let i = prevPage - 5; i < prevPage; i += 1) {
    markup += createLinksMarkup(i);
  }
  refs.linkList.insertAdjacentHTML('beforeend', markup);
}

function createLinksMarkup(num) {
  return `
    <li class="link-list__item">
      <a class="link" href="">${num}</a>
    </li>
    `;
}
