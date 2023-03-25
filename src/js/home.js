import BuildMoviesCategories from "./BuildMoviesCategories";
import { fetchPopularMovies } from "./utils";

const moviesContainer = document.querySelector("#movies-container");

const buildMoviesCategories = new BuildMoviesCategories(
  moviesContainer,
  fetchPopularMovies,
  5
);

buildMoviesCategories.buildInterface();
