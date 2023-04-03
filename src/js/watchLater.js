import LocalStorage from "./LocalstorageService";
import AuthService from "./AuthService";

const movies = LocalStorage.getItems();

const user = AuthService.getUserSession();

const userMovies = movies.filter((movie) => movie.userId === user.uuid);

if (userMovies && userMovies.length > 0) {
  const table = document.querySelector("#watch-later-movies");

  userMovies.forEach((movie) => {
    const tr = document.createElement("tr");
    const watchLaterMovie = `<td>${movie.title}</td>
        <td>
        <a href="/info/index.html?movieid=${movie.id}">
          <button class="movie--button">More info</button>
        </a>
          <button data-src=${movie.id} class="deleteButton movie--button">Delete</button>
      </td>`;

    tr.innerHTML = watchLaterMovie;

    table.appendChild(tr);
  });
}
