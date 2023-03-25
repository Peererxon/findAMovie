import { fetchMovieInfo } from "./utils";
import BuildMovieInfo from "./BuildMovieInfo";

const urlParams = new URLSearchParams(window.location.search);

const movieId = urlParams.get("movieid");

const movieInfoContainer = document.querySelector("#movie-info-container");

const buildMovieInfo = new BuildMovieInfo(
  movieInfoContainer,
  fetchMovieInfo,
  movieId
);

buildMovieInfo.buildInterface();
