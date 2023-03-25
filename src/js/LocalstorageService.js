export default class LocalStorage {
  static getItems() {
    const items = localStorage.getItem("favorite-movies");
    return JSON.parse(items);
  }
  static setItem(id) {
    const items = this.getItems();

    if (items) {
      items.push(id);

      localStorage.setItem("favorite-movies", JSON.stringify(items));
    } else {
      localStorage.setItem("favorite-movies", JSON.stringify([id]));
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
}
