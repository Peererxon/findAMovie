import BuildMoviesCategories from "./BuildMoviesCategories";
import { fetchAllhomeMovies } from "./utils";

const moviesContainer = document.querySelector("#movies-container");

const buildMoviesCategories = new BuildMoviesCategories(
  moviesContainer,
  fetchAllhomeMovies,
  5
);

buildMoviesCategories.buildInterface();
