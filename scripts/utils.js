// Funciones para abrir y cerrar las ventanas emergentes

const openedPopupClass = "popup_opened";

// Cierra la ventana emergente abierta al pulsar Escape
function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(`.${openedPopupClass}`);
    closePopup(openedPopup);
  }
}

// Cierra la ventana emergente al hacer clic en la superposición (fondo oscuro)
export function handleOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

export function openPopup(popup) {
  popup.classList.add(openedPopupClass);
  document.addEventListener("keydown", handleEscapeKey);
}

export function closePopup(popup) {
  popup.classList.remove(openedPopupClass);
  document.removeEventListener("keydown", handleEscapeKey);
}
