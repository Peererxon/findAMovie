import BuildMoviesCategories from "./BuildMoviesCategories";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "./utils";

//  Popular category
const moviesContainer = document.querySelector("#movies-container");

const buildMoviesCategories = new BuildMoviesCategories(
  moviesContainer,
  fetchPopularMovies,
  5
);

buildMoviesCategories.buildInterface();

//  Top rated category
const topRatedMoviesContainer = document.querySelector(
  "#top-rated-movies-container"
);

const buildTopRatedMoviesCategories = new BuildMoviesCategories(
  topRatedMoviesContainer,
  fetchTopRatedMovies,
  5
);

buildTopRatedMoviesCategories.buildInterface();

//  Up coming category
const upcomingMoviesContainer = document.querySelector(
  "#upcoming-movies-container"
);

const upcomingMoviesCategories = new BuildMoviesCategories(
  upcomingMoviesContainer,
  fetchUpcomingMovies,
  5
);

upcomingMoviesCategories.buildInterface();
