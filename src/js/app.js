import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import books from './books';
Notify.init({
  width: '150px',
});
const refs = {
  root: document.querySelector('#root'),
};
let state = {
  books,
  isFormShown: false,
  bookId: null,
  formId: null,
};
const getBooks = () => state.books;
const getIsFormShown = () => state.isFormShown;
const getBookId = () => state.bookId;
const getFormId = () => state.formId;
const ACTION_TYPES = {
  BOOKS: {
    SET_ALL: 'set all',
    REMOVE: 'remove',
    ADD: 'add',
    UPDATE: 'update',
  },
  FORM_SHOWN: 'formShown',
  BOOK_ID: 'bookId',
  FORM_ID: 'formId',
};
const LOCAL_STORAGE_BOOKS = 'books';
rehydrateBooks();
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
  refs.list.insertAdjacentHTML('beforeend', createListMarkup(getBooks()));
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
  updateState({ type: ACTION_TYPES.BOOKS.REMOVE, payload: id });
  renderList();
  if (getBookId() == id) {
    clearRight();
    updateState({ type: ACTION_TYPES.BOOK_ID, payload: null });
  }
  Notify.info('Book deleted');
}
function onEditClick(e) {
  const book = getBookFromLi(e.target);
  renderForm(book);
}
function onBookClick(e) {
  const book = getBookFromLi(e.target);
  updateState({ type: ACTION_TYPES.BOOK_ID, payload: book.id });
  renderBookPreview(book);
}
function getBookFromLi(el) {
  const parent = el.closest('li');
  const id = parent.dataset.id;
  return getBooks().find(book => book.id === id);
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
  if (getIsFormShown()) refs.form.removeEventListener('submit', onFormSubmit);
  updateState({ type: ACTION_TYPES.FORM_SHOWN, payload: false });
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
  const formId = book.id ? book.id : nanoid();
  updateState({ type: ACTION_TYPES.FORM_ID, payload: formId });
  renderRight(formMarkup);
  addFormListener();
}
function addFormListener() {
  refs.form = refs.right.querySelector('.edit');
  if (getIsFormShown()) return;
  refs.form.addEventListener('submit', onFormSubmit);
  updateState({ type: ACTION_TYPES.FORM_SHOWN, payload: true });
}
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
  const formId = getFormId();
  const index = getBooks().findIndex(book => book.id === formId);
  if (index >= 0) {
    updateState({ type: ACTION_TYPES.BOOKS.UPDATE, payload: { index, newBook } });
    Notify.success('Book updated');
    return;
  }
  newBook.id = formId;
  updateState({ type: ACTION_TYPES.BOOKS.ADD, payload: newBook });
  updateState({ type: ACTION_TYPES.FORM_ID, payload: null });
  updateState({ type: ACTION_TYPES.BOOK_ID, payload: formId });
  Notify.success('Book added');
}
function parse(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return null;
  }
}
function persistBooks() {
  try {
    window.localStorage.setItem(LOCAL_STORAGE_BOOKS, JSON.stringify(getBooks()));
  } catch (error) {
    return null;
  }
}
function rehydrateBooks() {
  const persistedBooks = parse(window.localStorage.getItem(LOCAL_STORAGE_BOOKS));
  const books = persistedBooks ? persistedBooks : [];
  updateState({ type: ACTION_TYPES.BOOKS.SET_ALL, payload: books });
}
function updateState({ type, payload }) {
  switch (type) {
    case ACTION_TYPES.BOOKS.SET_ALL: {
      state = { ...state, books: payload };
      persistBooks();
      return;
    }
    case ACTION_TYPES.BOOKS.ADD: {
      state = { ...state, books: [...state.books, payload] };
      persistBooks();
      return;
    }
    case ACTION_TYPES.BOOKS.REMOVE: {
      state = { ...state, books: [...state.books].filter(book => book.id !== payload) };
      persistBooks();
      return;
    }
    case ACTION_TYPES.BOOKS.UPDATE: {
      state.books[payload.index] = { ...state.books[payload.index], ...payload.newBook };
      persistBooks();
      return;
    }
    case ACTION_TYPES.FORM_SHOWN: {
      state = { ...state, isFormShown: payload };
      return;
    }
    case ACTION_TYPES.BOOK_ID: {
      state = { ...state, bookId: payload };
      return;
    }
    case ACTION_TYPES.FORM_ID: {
      state = { ...state, formId: payload };
      return;
    }
    default:
      return;
  }
}
