// Clase Section: renderiza una lista de elementos dentro de un contenedor
export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // Renderiza todos los elementos con la función renderer.
  // Se recorren en orden inverso porque addItem() los coloca al principio.
  renderItems() {
    [...this._items].reverse().forEach((item) => {
      this._renderer(item);
    });
  }

  // Agrega un elemento del DOM al contenedor
  addItem(element) {
    this._container.prepend(element);
  }
}
