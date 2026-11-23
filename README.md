# Alrededor de los EE.UU.

Proyectos 7, 8, 9, 10 y 11 del bootcamp de Desarrollo Web de TripleTen.

## Descripción

"Alrededor de los EE.UU." es una página interactiva donde el usuario puede ver una galería de fotos de lugares, añadir y eliminar tarjetas, darles "me gusta" y editar la información de su perfil.

Funcionalidad actual:

- Seis tarjetas iniciales generadas con JavaScript a partir de un array y un elemento `<template>`.
- Formulario "Nuevo lugar" (botón "+") para añadir una tarjeta con título y enlace a una imagen; la nueva tarjeta aparece al principio de la galería.
- Botón "me gusta" que cambia de color al pulsarlo.
- Botón de papelera para eliminar una tarjeta.
- Al hacer clic en una foto se abre una ventana emergente con la imagen ampliada y su nombre.
- Cuadro emergente "Editar perfil" que se rellena con los datos actuales y los actualiza al pulsar "Guardar" (o Enter).
- Validación de los formularios en tiempo real: mensajes de error bajo cada campo y botón de envío desactivado mientras haya datos no válidos.
- Las ventanas emergentes se cierran con el botón de cierre, con la tecla Escape o haciendo clic en el fondo oscuro.
- Los textos demasiado largos se recortan con una elipsis.
- Código organizado con programación orientada a objetos: cada clase vive en su propio módulo dentro de `src/components` y se importa en `src/pages/index.js`.
  - `Card`: crea una tarjeta y recibe la función `handleCardClick` para abrir la imagen.
  - `FormValidator`: valida un formulario.
  - `Section`: renderiza una lista de elementos en un contenedor mediante una función `renderer`.
  - `Popup`: abre y cierra una ventana emergente (botón de cierre, Escape y clic en el fondo).
  - `PopupWithImage` y `PopupWithForm`: clases hijas de `Popup` para la imagen ampliada y los formularios.
  - `UserInfo`: lee y actualiza el nombre y la ocupación del usuario.
- Las clases se comunican mediante acoplamiento débil (funciones de callback).

## Estructura

```
src/
  index.html
  blocks/        estilos BEM de cada bloque
  components/    Card, FormValidator, Section, Popup, PopupWithImage, PopupWithForm, UserInfo
  images/
  pages/         index.css e index.js
  utils/         constants.js
  vendor/        normalize.css y fuentes
```

## Tecnologías y técnicas

- HTML5 semántico
- CSS3: Flexbox, Grid, media queries y diseño responsivo (de 320px a 1280px)
- Metodología BEM y estructura de archivos BEM Flat
- JavaScript: selección de elementos del DOM, `addEventListener`, eventos `submit` y `click`, `classList`, `<template>` con `cloneNode`, `append`/`prepend`, `remove` y `closest`; validación de formularios con la API `validity` y un objeto de configuración; eventos `keydown`, `input` y `mousedown`
- Programación orientada a objetos: clases, herencia (`extends`/`super`), encapsulación (métodos privados con `_`), acoplamiento débil y módulos ES6 (`import`/`export`, `<script type="module">`)
- Sintaxis de desestructuración
- Git con flujo de ramas `main`, `develop` y `feature/*`
- GitHub Pages

## GitHub Pages

[Ver el proyecto en línea](https://victorplvc.github.io/web_project_around/src/)
