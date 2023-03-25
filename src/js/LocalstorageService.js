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
        items.push(id);

        localStorage.setItem("favorite-movies", JSON.stringify(items));
        alert(`"${title}" added to watch later`);
      } else {
        alert(`"${title}" already is in watch later`);
      }
    } else {
      localStorage.setItem("favorite-movies", JSON.stringify([id]));
      alert(`"${title}" added to watch later`);
    }
  }
  // TODO: test the bellow function
  static removeItem(id) {
    const items = this.getItems();

    if (items) {
      items.filter((itemId) => itemId === id);

      localStorage.setItem("favorite-movies", JSON.stringify(items));
    }
  }
  static checkIfExists(id) {
    const items = this.getItems();

    if (items) {
      const match = items.find((movieId) => movieId === id);

      if (match) {
        return true;
      }

      return false;
    } else {
      return false;
    }
  }
}
