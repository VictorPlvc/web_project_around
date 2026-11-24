import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import {
  apiConfig,
  validationConfig,
  cardTemplateSelector,
  cardListSelector,
  profilePopupSelector,
  cardPopupSelector,
  avatarPopupSelector,
  confirmPopupSelector,
  imagePopupSelector,
  profileNameSelector,
  profileAboutSelector,
  profileAvatarSelector,
  profileEditButton,
  cardAddButton,
  avatarEditButton,
  profileForm,
  cardForm,
  avatarForm,
} from "../utils/constants.js";

// Conexión con el servidor
const api = new Api(apiConfig);

// ID del usuario actual (llega del servidor)
let userId;

// Información del usuario
const userInfo = new UserInfo({
  nameSelector: profileNameSelector,
  aboutSelector: profileAboutSelector,
  avatarSelector: profileAvatarSelector,
});

// Ventanas emergentes de la imagen y de confirmación
const imagePopup = new PopupWithImage(imagePopupSelector);
const confirmPopup = new PopupWithConfirmation(confirmPopupSelector);

// Muestra un error de la solicitud en la consola
function logError(err) {
  console.error(err);
}

// Abre la ventana de confirmación y elimina la tarjeta al pulsar "Sí"
function handleDeleteClick(card) {
  confirmPopup.setSubmitAction(() => {
    confirmPopup.renderLoading(true);
    api
      .deleteCard(card.getId())
      .then(() => {
        card.removeCard();
        confirmPopup.close();
      })
      .catch(logError)
      .finally(() => confirmPopup.renderLoading(false));
  });
  confirmPopup.open();
}

// Añade o elimina el "me gusta" en el servidor
function handleLikeClick(card) {
  api
    .changeLikeStatus(card.getId(), card.isLiked())
    .then((cardData) => {
      card.setLikeState(cardData.isLiked);
    })
    .catch(logError);
}

// Crea una tarjeta y devuelve su elemento
function createCard(cardData) {
  const card = new Card(cardData, cardTemplateSelector, userId, {
    handleCardClick: (data) => imagePopup.open(data),
    handleDeleteClick,
    handleLikeClick,
  });
  return card.generateCard();
}

// Lista de tarjetas
const cardList = new Section(
  {
    renderer: (cardData) => {
      cardList.addItem(createCard(cardData));
    },
  },
  cardListSelector
);

// Envía el formulario: muestra "Guardando...", hace la solicitud y cierra
function handleSubmit(popup, request) {
  popup.renderLoading(true);
  request()
    .then(() => popup.close())
    .catch(logError)
    .finally(() => popup.renderLoading(false));
}

// Ventana emergente "Editar perfil"
const profilePopup = new PopupWithForm(profilePopupSelector, (formData) => {
  handleSubmit(profilePopup, () =>
    api.setUserInfo(formData).then((userData) => {
      userInfo.setUserInfo(userData);
    })
  );
});

// Ventana emergente "Nuevo lugar"
const cardPopup = new PopupWithForm(cardPopupSelector, (formData) => {
  handleSubmit(cardPopup, () =>
    api.addCard(formData).then((cardData) => {
      cardList.addItem(createCard(cardData));
    })
  );
});

// Ventana emergente "Cambiar foto de perfil"
const avatarPopup = new PopupWithForm(avatarPopupSelector, (formData) => {
  handleSubmit(avatarPopup, () =>
    api.setUserAvatar(formData).then((userData) => {
      userInfo.setUserInfo(userData);
    })
  );
});

// Un validador para cada formulario
const profileFormValidator = new FormValidator(validationConfig, profileForm);
const cardFormValidator = new FormValidator(validationConfig, cardForm);
const avatarFormValidator = new FormValidator(validationConfig, avatarForm);

profileEditButton.addEventListener("click", () => {
  profilePopup.setInputValues(userInfo.getUserInfo());
  profileFormValidator.resetValidation();
  profilePopup.open();
});

cardAddButton.addEventListener("click", () => {
  cardFormValidator.resetValidation();
  cardPopup.open();
});

avatarEditButton.addEventListener("click", () => {
  avatarFormValidator.resetValidation();
  avatarPopup.open();
});

imagePopup.setEventListeners();
confirmPopup.setEventListeners();
profilePopup.setEventListeners();
cardPopup.setEventListeners();
avatarPopup.setEventListeners();

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

// Primero se obtiene el usuario y después se muestran las tarjetas
api
  .getAppInfo()
  .then(([userData, cards]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    cardList.renderItems(cards);
  })
  .catch(logError);
