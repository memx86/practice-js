class TMDBApi {
  static #KEY = 'fadfbb72581e18342bb7490adda20bdd';
  static BASE_URL = 'https://api.themoviedb.org/3';
  static SEARCH_MOVIES = `${TMDBApi.BASE_URL}/search/movie`;
  static MOVIE = `${TMDBApi.BASE_URL}/movie`;
  static TRENDING = `${TMDBApi.BASE_URL}/trending`;
  static COMMON = `api_key=${TMDBApi.#KEY}&language=en-US`;
  #page;

  constructor() {
    this.#page = 1;
  }

  fetchMovie = url =>
    fetch(`${url}&page=${this.#page}`)
      .then(r => {
        if (r.ok) return r.json();
        return Promise.reject(r);
      })
      .then(r => {
        this.incrementPage();
        return r;
      });

  getMovies = query => {
    const searchQuery = `?query=${query}`;
    const url = `${TMDBApi.SEARCH_MOVIES}${searchQuery}&${TMDBApi.COMMON}`;
    return this.fetchMovie(url).then(r => r.results);
  };

  getMovie = id => {
    const url = `${TMDBApi.MOVIE}/${id}?${TMDBApi.COMMON}`;
    return this.fetchMovie(url);
  };

  getCast = id => {
    const url = `${TMDBApi.MOVIE}/${id}/credits?${TMDBApi.COMMON}`;
    return this.fetchMovie(url).then(r => r.cast);
  };

  getReviews = id => {
    const url = `${TMDBApi.MOVIE}/${id}/reviews?${TMDBApi.COMMON}`;
    return this.fetchMovie(url).then(r => r.results);
  };

  getTrending = () => {
    const url = `${TMDBApi.TRENDING}/all/day?${TMDBApi.COMMON}`;
    return this.fetchMovie(url);
    // return this.fetchMovie(url).then(r => r.results);
  };

  resetPage = () => {
    this.#page = 1;
  };

  incrementPage = () => {
    this.#page += 1;
  };

  get page() {
    return this.#page;
  }

  set page(num) {
    this.#page = num;
  }
}

export { TMDBApi };
