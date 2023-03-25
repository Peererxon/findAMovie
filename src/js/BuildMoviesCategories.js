import { fetchPopularMovies } from "./utils";

export class BuildMoviesCategories {
  constructor(container, fetchMovieService) {
    this.container = container;
    this.fetchMovieService = fetchMovieService;
  }

  async buildInterface() {
    const movies = await this.fetchMovieService();

    for (let index = 0; index < 2; index++) {
      // Building HTML elements
      const movieContainer = document.createElement("div");
      const poster = document.createElement("img");
      const title = document.createElement("h2");
      const overview = document.createElement("p");
      const releaseDate = document.createElement("p");

      poster.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w500/${movies.results[index].poster_path}`
      );

      title.textContent = movies.results[index].title;

      overview.innerText = movies.results[index].overview;

      releaseDate.innerText = `Release date: ${movies.results[index].release_date}`;

      // Adding classes

      movieContainer.classList.add("movie");

      // Append HTML elements
      movieContainer.appendChild(poster);
      movieContainer.appendChild(title);
      movieContainer.appendChild(overview);
      movieContainer.appendChild(releaseDate);

      this.container.appendChild(movieContainer);
    }
  }
}

const moviesContainer = document.querySelector("#movies-container");

const buildMoviesCategories = new BuildMoviesCategories(
  moviesContainer,
  fetchPopularMovies
);

buildMoviesCategories.buildInterface();
