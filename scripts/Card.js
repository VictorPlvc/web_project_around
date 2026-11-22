// Clase Card: crea una tarjeta a partir de sus datos y de un selector de plantilla
export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  // Clona el marcado de la tarjeta desde el elemento <template>
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  // Cambia el estado del botón "me gusta"
  _handleLikeButton() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  // Elimina la tarjeta de la página
  _handleDeleteButton() {
    this._element.remove();
    this._element = null;
  }

  // Añade los detectores de eventos de la tarjeta
  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteButton();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });
  }

  // Devuelve el elemento de la tarjeta listo para añadirlo a la página
  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".card__image");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__delete-button");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
