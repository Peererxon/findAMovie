export default class BuildMoviesCategories {
  constructor(container, fetchMovieService, maxMoviesToShow) {
    this.container = container;
    this.fetchMovieService = fetchMovieService;
    this.maxMoviesToShow = maxMoviesToShow;
  }

  async buildInterface() {
    const movies = await this.fetchMovieService();

    for (let index = 0; index < this.maxMoviesToShow; index++) {
      // Building HTML elements
      const movieContainer = document.createElement("div");
      const poster = document.createElement("img");
      const title = document.createElement("h2");
      const voteAverage = document.createElement("p");
      const addToWatchLater = document.createElement("button");
      const moreInfoButton = document.createElement("button");

      poster.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w500/${movies.results[index].poster_path}`
      );

      title.textContent = movies.results[index].title;

      voteAverage.innerText = movies.results[index].vote_average;

      addToWatchLater.innerText = "Watch Later";

      moreInfoButton.innerText = "More info";

      // Adding classes

      movieContainer.classList.add("movie");
      poster.classList.add("movie--poster");
      addToWatchLater.classList.add("movie--button");
      moreInfoButton.classList.add("movie--button");

      // Append HTML elements
      movieContainer.appendChild(poster);
      movieContainer.appendChild(voteAverage);
      movieContainer.appendChild(title);
      movieContainer.appendChild(addToWatchLater);
      movieContainer.appendChild(moreInfoButton);

      this.container.appendChild(movieContainer);
    }
  }
}
