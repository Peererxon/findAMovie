import LocalStorage from "./LocalstorageService";

export default class BuildSearchResults {
  constructor(container, fetchMovieService) {
    this.container = container;
    this.fetchMovieService = fetchMovieService;
  }

  buildMovieResults(movies) {
    movies.forEach((movie) => {
      // Building HTML elements
      const linkToMovieInfoButton = document.createElement("a");
      const movieContainer = document.createElement("div");
      const poster = document.createElement("img");
      const title = document.createElement("h2");
      const voteAverageContainer = document.createElement("div");
      const voteAverageDiv = document.createElement("div");
      const voteAverage = document.createElement("p");
      const addToWatchLater = document.createElement("button");
      const moreInfoButton = document.createElement("button");

      // Set attributes, text content or inner text
      if (movie.poster_path) {
        poster.setAttribute(
          "src",
          `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        );
      } else {
        poster.setAttribute("src", `/noposter.webp`);
      }

      title.textContent = movie.title;

      voteAverageDiv.innerHTML =
        '<span class="material-symbols-outlined">star</span>';

      voteAverage.innerText = movie.vote_average;

      addToWatchLater.innerText = "Watch Later";

      linkToMovieInfoButton.setAttribute(
        "href",
        `/info/index.html?movieid=${movie.id}`
      );

      moreInfoButton.innerText = "More info";

      // Adding classes

      movieContainer.classList.add("movie");
      poster.classList.add("movie--poster");
      voteAverageContainer.classList.add("movie--vote-average");
      voteAverageDiv.classList.add("movie--vote-average-div");
      addToWatchLater.classList.add("movie--button");
      moreInfoButton.classList.add("movie--button");

      // Set events
      addToWatchLater.addEventListener("click", () => {
        LocalStorage.setItem(movie);
      });

      // Append HTML elements
      movieContainer.appendChild(poster);
      voteAverageContainer.appendChild(voteAverageDiv);
      voteAverageContainer.appendChild(voteAverage);
      movieContainer.appendChild(voteAverageContainer);
      movieContainer.appendChild(title);
      movieContainer.appendChild(addToWatchLater);
      movieContainer.appendChild(moreInfoButton);
      linkToMovieInfoButton.appendChild(moreInfoButton);
      movieContainer.appendChild(linkToMovieInfoButton);

      this.container.appendChild(movieContainer);
    });
  }
  async buildInterface() {
    try {
      const urlParams = new URLSearchParams(window.location.search);

      const movieTitle = urlParams.get("title");

      const movies = await this.fetchMovieService(encodeURI(movieTitle));

      this.buildMovieResults(movies.results);
    } catch (error) {
      console.log(
        "🚀 ~ file: BuildMoviesCategories.js:54 ~ BuildMoviesCategories ~ buildInterface ~ error:",
        error
      );
    }
  }
}
