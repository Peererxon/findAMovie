export default class LocalStorage {
  static getItems() {
    const items = localStorage.getItem("favorite-movies");
    return JSON.parse(items);
  }
  static setItem({ id, title }) {
    const items = this.getItems();

    if (items) {
      const match = this.checkIfExists(id);

      // it only adds the given movie if it not exists
      if (!match) {
        items.push({ id, title });

        localStorage.setItem("favorite-movies", JSON.stringify(items));
        alert(`"${title}" added to watch later`);
      } else {
        alert(`"${title}" is already in watch later`);
      }
    } else {
      localStorage.setItem("favorite-movies", JSON.stringify([{ id, title }]));
      alert(`"${title}" added to watch later`);
    }
  }
  static removeItem(id) {
    const items = this.getItems();

    if (items) {
      const filteredItems = items.filter((movie) => movie.id.toString() !== id);

      localStorage.setItem("favorite-movies", JSON.stringify(filteredItems));
    }
  }
  static checkIfExists(id) {
    const items = this.getItems();

    if (items) {
      const match = items.find((movie) => movie.id === id);

      if (match) {
        return true;
      }

      return false;
    } else {
      return false;
    }
  }
}
