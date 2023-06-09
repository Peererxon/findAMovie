const API_KEY = "f779fbf0527564b137d06b0933422310";

export async function fetchPopularMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  const parsed = await response.json();

  return parsed;
}

export async function fetchTopRatedMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );

  const parsed = await response.json();

  return parsed;
}

export async function fetchUpcomingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  );

  const parsed = await response.json();

  return parsed;
}

export async function fetchMovieInfo(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`
  );

  const parsed = await response.json();

  return parsed;
}

export async function searchMovies(title) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${encodeURI(
      title
    )}`
  );

  const parsed = await response.json();

  return parsed;
}

export function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
