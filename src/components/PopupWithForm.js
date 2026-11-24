import Popup from "./Popup.js";

// Clase PopupWithForm: ventana emergente con un formulario
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = Array.from(
      this._form.querySelectorAll(".popup__input")
    );
    this._submitButton = this._form.querySelector(".popup__button");
    this._submitButtonText = this._submitButton.textContent;
  }

  // Recopila los valores de todos los campos en un objeto
  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  // Rellena los campos con los datos recibidos
  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  // Cambia el texto del botón mientras se guardan los datos
  renderLoading(isLoading, loadingText = "Guardando...") {
    this._submitButton.textContent = isLoading
      ? loadingText
      : this._submitButtonText;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
