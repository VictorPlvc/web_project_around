// Datos para conectarse al servidor
export const apiConfig = {
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "d511fdc7-3526-4bec-b96c-02964392e772",
    "Content-Type": "application/json",
  },
};

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
export const avatarPopupSelector = ".popup_type_avatar";
export const confirmPopupSelector = ".popup_type_confirm";
export const imagePopupSelector = ".popup_type_image";
export const profileNameSelector = ".profile__name";
export const profileAboutSelector = ".profile__description";
export const profileAvatarSelector = ".profile__avatar";

// Botones que abren las ventanas emergentes
export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
export const cardAddButton = document.querySelector(".profile__add-button");
export const avatarEditButton = document.querySelector(
  ".profile__avatar-edit-button"
);

// Formularios
export const profileForm = document.querySelector(
  `${profilePopupSelector} .popup__form`
);
export const cardForm = document.querySelector(
  `${cardPopupSelector} .popup__form`
);
export const avatarForm = document.querySelector(
  `${avatarPopupSelector} .popup__form`
);
