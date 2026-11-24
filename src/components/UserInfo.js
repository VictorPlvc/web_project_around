// Clase UserInfo: muestra la información del usuario en la página
export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  // Devuelve los datos actuales del usuario
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
    };
  }

  // Muestra los nuevos datos del usuario en la página
  setUserInfo({ name, about, avatar }) {
    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
    if (avatar) {
      this._avatarElement.src = avatar;
      this._avatarElement.alt = `Foto de perfil de ${name}`;
    }
  }
}
