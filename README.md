# Alrededor de los EE.UU.

Proyectos 7, 8 y 9 del bootcamp de Desarrollo Web de TripleTen.

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

## Tecnologías y técnicas

- HTML5 semántico
- CSS3: Flexbox, Grid, media queries y diseño responsivo (de 320px a 1280px)
- Metodología BEM y estructura de archivos BEM Flat
- JavaScript: selección de elementos del DOM, `addEventListener`, eventos `submit` y `click`, `classList`, `<template>` con `cloneNode`, `append`/`prepend`, `remove` y `closest`; validación de formularios con la API `validity` y un objeto de configuración; eventos `keydown`, `input` y `mousedown`
- Git con flujo de ramas `main`, `develop` y `feature/*`
- GitHub Pages

## GitHub Pages

[Ver el proyecto en línea](https://victorplvc.github.io/web_project_around/)
