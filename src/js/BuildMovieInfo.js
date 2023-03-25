export default class BuildMovieInfo {
  constructor(container, fetchMovieService, movieId) {
    this.container = container;
    this.fetchMovieService = fetchMovieService;
    this.movieId = movieId;
  }

  async buildInterface() {
    try {
      const movie = await this.fetchMovieService(this.movieId);

      document.querySelector("#movie-name").textContent = movie.title;

      // Building HTML elements
      const movieContainer = document.createElement("div");
      const poster = document.createElement("img");
      const title = document.createElement("h2");
      const voteAverageContainer = document.createElement("div");
      const voteAverageDiv = document.createElement("div");
      const voteAverage = document.createElement("p");
      const overview = document.createElement("p");
      const originalLanguage = document.createElement("p");
      const releaseDate = document.createElement("p");
      const status = document.createElement("p");
      const addToWatchLater = document.createElement("button");

      // Set attributes, text content or inner text
      poster.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      );

      title.textContent = movie.title;

      voteAverageDiv.innerHTML =
        '<span class="material-symbols-outlined">star</span>';

      voteAverage.innerText = movie.vote_average;

      overview.textContent = movie.overview;

      originalLanguage.textContent = `Original language: ${movie.original_language}`;

      releaseDate.textContent = `Release date: ${movie.release_date}`;

      status.textContent = `Status: ${movie.status}`;

      addToWatchLater.innerText = "Add to watch Later";

      // Adding classes

      movieContainer.classList.add("movie");
      poster.classList.add("movie--poster");
      voteAverageContainer.classList.add("movie--vote-average");
      voteAverageDiv.classList.add("movie--vote-average-div");
      addToWatchLater.classList.add("movie--button");

      // Append HTML elements
      movieContainer.appendChild(poster);
      voteAverageContainer.appendChild(voteAverageDiv);
      voteAverageContainer.appendChild(voteAverage);
      movieContainer.appendChild(voteAverageContainer);
      movieContainer.appendChild(title);
      movieContainer.appendChild(overview);
      movieContainer.appendChild(originalLanguage);
      movieContainer.appendChild(releaseDate);
      movieContainer.appendChild(status);
      movieContainer.appendChild(addToWatchLater);

      this.container.appendChild(movieContainer);
    } catch (error) {
      alert("Can not fetch movie info");
      console.log(
        "🚀 ~ file: BuildMoviesCategories.js:54 ~ BuildMoviesCategories ~ buildInterface ~ error:",
        error
      );
    }
  }
}
