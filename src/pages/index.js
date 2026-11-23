import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  validationConfig,
  cardTemplateSelector,
  cardListSelector,
  profilePopupSelector,
  cardPopupSelector,
  imagePopupSelector,
  profileNameSelector,
  profileJobSelector,
  profileEditButton,
  cardAddButton,
  profileForm,
  cardForm,
} from "../utils/constants.js";

// Información del usuario
const userInfo = new UserInfo({
  nameSelector: profileNameSelector,
  jobSelector: profileJobSelector,
});

// Ventana emergente de la imagen
const imagePopup = new PopupWithImage(imagePopupSelector);

// Crea una tarjeta y devuelve su elemento
function createCard(cardData) {
  const card = new Card(cardData, cardTemplateSelector, (data) => {
    imagePopup.open(data);
  });
  return card.generateCard();
}

// Lista de tarjetas
const cardList = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      cardList.addItem(createCard(cardData));
    },
  },
  cardListSelector
);

// Ventana emergente "Editar perfil"
const profilePopup = new PopupWithForm(profilePopupSelector, (formData) => {
  userInfo.setUserInfo(formData);
});

// Ventana emergente "Nuevo lugar"
const cardPopup = new PopupWithForm(cardPopupSelector, (formData) => {
  cardList.addItem(createCard(formData));
});

// Un validador para cada formulario
const profileFormValidator = new FormValidator(validationConfig, profileForm);
const cardFormValidator = new FormValidator(validationConfig, cardForm);

profileEditButton.addEventListener("click", () => {
  profilePopup.setInputValues(userInfo.getUserInfo());
  profileFormValidator.resetValidation();
  profilePopup.open();
});

cardAddButton.addEventListener("click", () => {
  cardFormValidator.resetValidation();
  cardPopup.open();
});

imagePopup.setEventListeners();
profilePopup.setEventListeners();
cardPopup.setEventListeners();

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

cardList.renderItems();
