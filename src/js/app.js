import books from './books';
const refs = {
  root: document.querySelector('#root'),
};
const state = {
  books,
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
}
function createList() {
  renderList(state.books);
  refs.list.addEventListener('click', onListClick);
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
function onListClick(e) {
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
}
function onDeleteClick(e) {
  const { id } = getBookFromLi(e.target);
  state.books = state.books.filter(book => book.id !== id);
  renderList();
  clearRight();
}
function onEditClick(e) {
  const { book } = getBookFromLi(e.target);
  const formMarkup = createFormMarkup(book);
  renderRight(formMarkup);
}
function onBookClick(e) {
  const { book } = getBookFromLi(e.target);
  const bookMarkup = createBookMarkup(book);
  renderRight(bookMarkup);
}
function getBookFromLi(el) {
  const parent = el.closest('li');
  const id = parent.dataset.id;
  return { book: books.find(book => book.id === id), id };
}
function createBookMarkup({ author, title, img, plot }) {
  return `
<div>
<h2>${title}</h2>
<p>${author}</p>
<img src='${img}' alt='${author}: ${title}' width='200'>
<p>${plot}</p>
</div>
`;
}
function clearRight() {
  refs.right.innerHTML = '';
}
function renderRight(markup) {
  clearRight();
  refs.right.insertAdjacentHTML('beforeend', markup);
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
