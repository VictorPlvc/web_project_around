// Clase Card: crea una tarjeta a partir de sus datos y de un selector de plantilla
export default class Card {
  constructor(
    data,
    templateSelector,
    userId,
    { handleCardClick, handleDeleteClick, handleLikeClick }
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;
    this._ownerId = data.owner;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  // Clona el marcado de la tarjeta desde el elemento <template>
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  getId() {
    return this._id;
  }

  isLiked() {
    return this._isLiked;
  }

  // Actualiza el estado del botón "me gusta"
  setLikeState(isLiked) {
    this._isLiked = isLiked;
    this._likeButton.classList.toggle("card__like-button_active", isLiked);
  }

  // Elimina la tarjeta de la página
  removeCard() {
    this._element.remove();
    this._element = null;
  }

  // Añade los detectores de eventos de la tarjeta
  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this);
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick(this);
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

    this.setLikeState(this._isLiked);

    // Solo el autor de la tarjeta puede eliminarla
    if (this._ownerId !== this._userId) {
      this._deleteButton.remove();
    }

    this._setEventListeners();

    return this._element;
  }
}
