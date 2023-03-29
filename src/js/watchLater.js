import { fetchMovieInfo } from "../js/utils";

const test = async () => {
  const movies = await JSON.parse(localStorage.getItem("favorite-movies"));
  console.log("🚀 ~ file: watchLater.js:2 ~ movies:", movies);

  const a = await Promise.all(
    movies
      .map(async (id) => await fetchMovieInfo(id))
      .then((results) => {
        console.log("🚀 ~ file: watchLater.js:12 ~ .then ~ results:", results);
      })
  );
};
test();
