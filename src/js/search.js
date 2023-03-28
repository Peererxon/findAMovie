import BuildSearchResults from "./BuildSearchResults";
import { searchMovies } from "./utils";

const moviesContainer = document.querySelector("#movies-container");

const buildSearchResults = new BuildSearchResults(
  moviesContainer,
  searchMovies
);

buildSearchResults.buildInterface();
