import { fetchMovieInfo } from "./utils";

const urlParams = new URLSearchParams(window.location.search);

const movieId = urlParams.get("movieid");

fetchMovieInfo(movieId);
