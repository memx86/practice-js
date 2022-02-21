import menu from './menu.json';
import menuItem from '../templates/menu-item.hbs';
const refs = {
  list: document.querySelector('.js-menu'),
  switch: document.querySelector('#theme-switch-toggle'),
};
const THEME = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const STORAGE_KEY = 'theme';
const markup = menuItem(menu);

rehydrateTheme();
refs.list.insertAdjacentHTML('afterbegin', markup);
refs.switch.addEventListener('change', onSwitchChange);

function onSwitchChange(e) {
  const checked = e.target.checked;
  toLocalStorage(checked);
  setTheme(checked);
}
function toLocalStorage(value) {
  localStorage.setItem(STORAGE_KEY, value);
}
function rehydrateTheme() {
  const checked = Boolean(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  setTheme(checked);
  refs.switch.checked = checked;
}
function setTheme(checked) {
  if (checked) {
    changeTheme(THEME.DARK);
    return;
  }
  changeTheme(THEME.LIGHT);
}
function changeTheme(value) {
  switch (value) {
    case THEME.LIGHT:
      document.body.classList.remove(THEME.DARK);
      document.body.classList.add(THEME.LIGHT);
      break;
    case THEME.DARK:
      document.body.classList.remove(THEME.LIGHT);
      document.body.classList.add(THEME.DARK);
      break;
    default:
      return;
  }
}
