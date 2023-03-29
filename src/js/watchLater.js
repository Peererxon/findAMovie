import LocalStorage from "./LocalstorageService";

const movies = LocalStorage.getItems();

if (movies && movies.length > 0) {
  const table = document.querySelector("#watch-later-movies");

  movies.forEach((movie) => {
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
