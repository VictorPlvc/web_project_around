// Datos de las tarjetas iniciales
export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

// Configuración de la validación: selectores y clases de los formularios
export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// Selectores
export const cardTemplateSelector = "#card-template";
export const cardListSelector = ".elements__list";
export const profilePopupSelector = ".popup_type_edit-profile";
export const cardPopupSelector = ".popup_type_add-card";
export const imagePopupSelector = ".popup_type_image";
export const profileNameSelector = ".profile__name";
export const profileJobSelector = ".profile__description";

// Botones que abren las ventanas emergentes
export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
export const cardAddButton = document.querySelector(".profile__add-button");

// Formularios
export const profileForm = document.querySelector(
  `${profilePopupSelector} .popup__form`
);
export const cardForm = document.querySelector(
  `${cardPopupSelector} .popup__form`
);
