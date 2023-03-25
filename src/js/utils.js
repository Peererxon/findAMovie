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

export async function fetchAllhomeMovies() {
  try {
    const [response1, response2, response3] = await Promise.all([
      fetchPopularMovies(),
      fetchTopRatedMovies(),
      fetchUpcomingMovies(),
    ]);
    return [response1, response2, response3];
  } catch (error) {
    console.log("🚀 ~ file: utils.js:42 ~ fetchAllhomeMovies ~ error:", error);
    alert("Can not fetch movies right now");
  }
}
