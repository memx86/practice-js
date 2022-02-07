import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import books from './books';
Notify.init({
  width: '150px',
});
const refs = {
  root: document.querySelector('#root'),
};
const state = {
  books,
  isFormShown: false,
  formId: null,
};
createStructure();
createList();
refs.left.append(refs.title, refs.list, refs.addBtn);
refs.root.append(refs.left, refs.right);

function createStructure() {
  refs.left = document.createElement('div');
  refs.right = document.createElement('div');
  refs.left.classList.add('left');
  refs.right.classList.add('right');

  refs.title = document.createElement('h1');
  refs.list = document.createElement('ul');
  refs.addBtn = document.createElement('button');

  refs.list.classList.add('list');
  refs.title.classList.add('title');
  refs.title.textContent = 'Library';
  refs.addBtn.textContent = 'Add book';
  refs.addBtn.type = 'button';
  refs.addBtn.classList.add('btn');
  refs.addBtn.dataset.btn = 'add';
}
function createList() {
  renderList();
  refs.left.addEventListener('click', onBookShelfClick);
}
function renderList() {
  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', createListMarkup(state.books));
}
function createListMarkup(arr) {
  return arr
    .map(
      ({ title, id }) => `<li class='item' data-id='${id}'>
    <p class="book">${title}</p>
    <div class="wrapper">
    <button class="btn" type='button' data-btn="delete">Delete</button>
    <button class="btn" type='button' data-btn="edit">Edit</button>
    </div>
    </li>`,
    )
    .join('');
}
function onBookShelfClick(e) {
  if (e.target.classList.contains('book')) {
    onBookClick(e);
    return;
  }

  if (e.target.dataset.btn === 'edit') {
    onEditClick(e);
    return;
  }
  if (e.target.dataset.btn === 'delete') {
    onDeleteClick(e);
    return;
  }
  if (e.target.dataset.btn === 'add') {
    renderForm();
    return;
  }
}
function onDeleteClick(e) {
  const id = getBookFromLi(e.target).id;
  state.books = state.books.filter(book => book.id !== id);
  renderList();
  clearRight();
  Notify.info('Book deleted');
}
function onEditClick(e) {
  const book = getBookFromLi(e.target);
  renderForm(book);
}
function onBookClick(e) {
  const book = getBookFromLi(e.target);
  renderBookPreview(book);
}
function getBookFromLi(el) {
  const parent = el.closest('li');
  const id = parent.dataset.id;
  return state.books.find(book => book.id === id);
}
function createBookMarkup({ author, title, img, plot }) {
  return `
<div class="book-card">
<h2 class="book-card__title">${title}</h2>
<p class="book-card__item book-card__item--author">${author}</p>
<img class="book-card__img" src='${img}' alt='${author}: ${title}' width='200'>
<p class="book-card__item book-card__item--plot">${plot}</p>
</div>
`;
}
function clearRight() {
  if (state.isFormShown) refs.form.removeEventListener('submit', onFormSubmit);
  state.isFormShown = false;
  refs.right.innerHTML = '';
}
function renderRight(markup) {
  clearRight();
  refs.right.insertAdjacentHTML('beforeend', markup);
}
function renderBookPreview(book) {
  const bookMarkup = createBookMarkup(book);
  renderRight(bookMarkup);
}
function createFormMarkup({ author = '', title = '', img = '', plot = '' }) {
  return `
<form class="edit">
  <label class="edit__label">
    <span>Author</span>
    <input class="edit__input" type="text" name="author" value="${author}"/>
  </label>
  <label class="edit__label">
    <span>Book</span>
    <input class="edit__input" type="text" name="title" value="${title}"/>
  </label>
  <label class="edit__label">
    <span>Image url</span>
    <input class="edit__input" type="text" name="img" value="${img}"/>
  </label>
  <label class="edit__label">
    <span>Plot</span>
    <textarea class="edit__input edit__input--textarea" name="plot">${plot
      .replace(/\n/g, '')
      .replace(/\s+/g, ' ')}</textarea>
  </label>
  <button class="edit__save" type="submit">Save</button>
</form>`;
}
function renderForm(book = {}) {
  const formMarkup = createFormMarkup(book);
  state.formId = book.id ? book.id : nanoid();
  renderRight(formMarkup);
  addFormListener();
}
function addFormListener() {
  refs.form = refs.right.querySelector('.edit');
  if (state.isFormShown) return;
  refs.form.addEventListener('submit', onFormSubmit);
  // refs.form.querySelectorAll('input').forEach(el => el.addEventListener('input', onChange));
  state.isFormShown = true;
}
// function onChange(e) {
//   state.newBook[e.target.name] = e.target.value;
// }
function onFormSubmit(e) {
  e.preventDefault();
  const book = {};
  const formData = new FormData(e.target);
  formData.forEach((value, name) => {
    book[name] = value;
  });
  upsertBook(book);
  renderBookPreview(book);
  renderList();
}
function upsertBook(newBook) {
  const index = state.books.findIndex(book => book.id === state.formId);
  if (index >= 0) {
    state.books[index] = { ...state.books[index], ...newBook };
    Notify.success('Book updated');
    return;
  }
  newBook.id = state.formId;
  state.books = [...state.books, newBook];
  state.formId = null;
  Notify.success('Book added');
}
