export default class BuildMoviesCategories {
  constructor(container, fetchMovieService, maxMoviesToShow) {
    this.container = container;
    this.fetchMovieService = fetchMovieService;
    this.maxMoviesToShow = maxMoviesToShow;
  }

  buildMovieCategory(movies) {
    for (let index = 0; index < this.maxMoviesToShow; index++) {
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
      poster.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w500/${movies.results[index].poster_path}`
      );

      title.textContent = movies.results[index].title;

      voteAverageDiv.innerHTML =
        '<span class="material-symbols-outlined">star</span>';

      voteAverage.innerText = movies.results[index].vote_average;

      addToWatchLater.innerText = "Watch Later";

      linkToMovieInfoButton.setAttribute(
        "href",
        `/info/index.html?movieid=${movies.results[index].id}`
      );

      moreInfoButton.innerText = "More info";

      // Adding classes

      movieContainer.classList.add("movie");
      poster.classList.add("movie--poster");
      voteAverageContainer.classList.add("movie--vote-average");
      voteAverageDiv.classList.add("movie--vote-average-div");
      addToWatchLater.classList.add("movie--button");
      moreInfoButton.classList.add("movie--button");

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
    }
  }
  async buildInterface() {
    try {
      const movies = await this.fetchMovieService();

      this.buildMovieCategory(movies);
    } catch (error) {
      console.log(
        "🚀 ~ file: BuildMoviesCategories.js:54 ~ BuildMoviesCategories ~ buildInterface ~ error:",
        error
      );
    }
  }
}
