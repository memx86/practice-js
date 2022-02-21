class PixabayAPI {
  static #BASE_URL = 'https://pixabay.com/api';
  static #API_KEY = '25272385-d3b781fb1902e693cd197cf56';
  #page = 1;
  #query;

  getImages() {
    const params = new URLSearchParams({
      q: this.#query,
      page: this.#page,
      per_page: 30,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      key: PixabayAPI.#API_KEY,
    });
    return fetch(`${PixabayAPI.#BASE_URL}/?${params}`).then(r =>
      r.ok ? r.json() : Promise.reject(r.statusText),
    );
  }
  get page() {
    return this.#page;
  }
  set page(value) {
    this.#page = value;
  }
  get query() {
    return this.#query;
  }
  set query(value) {
    this.#query = value;
  }
}
export { PixabayAPI };
