import books from './books';
const refs = {
  root: document.querySelector('#root'),
};

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

const createListMarkup = arr =>
  arr
    .map(
      ({ title }) => `<li class='item'>
    <p>${title}</p>
    <div>
    <button type='button'>Delete</button>
    <button type='button'>Edit</button>
    </div>
    </li>`,
    )
    .join('');

refs.list.insertAdjacentHTML('beforeend', createListMarkup(books));

const createBookMarkup = ({ author, title, img, plot }) => `
<div>
<h2>${title}</h2>
<p>${author}</p>
<img src='${img}' alt='${author}: ${title}' width='200'>
<p>${plot}</p>
</div>
`;
const createFormMarkup = ({ author = '', title = '', img = '', plot = '' }) => `
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
    <textarea class="edit__input edit__input--textarea" name="plot" value="${plot}">
  </label>
  <button class="edit__save" type="submit">Save</button>
</form>`;

// console.log('book', createBookMarkup(books[0]));
// console.log('form', createFormMarkup(books[0]));

refs.left.append(refs.title, refs.list, refs.addBtn);
refs.root.append(refs.left, refs.right);
