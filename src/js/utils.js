const API_KEY = "f779fbf0527564b137d06b0933422310";

export async function fetchPopularMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  const parsed = await response.json();

  console.log("🚀 ~ file: utils.js:10 ~ fetchPopularMovies ~ parsed:", parsed);

  return parsed;
}

// fetchPopularMovies();
