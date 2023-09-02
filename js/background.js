const backgroundImages = document.querySelectorAll('.background-image');
const changeBackgroundButton = document.getElementById('changeBackgroundButton');

let currentBackgroundIndex = 0;

// Función para cambiar la imagen de fondo
function changeBackground() {
    // 01. Ocultamos la imagen de fondo actual con opacidad 0
    backgroundImages[currentBackgroundIndex].style.opacity = 0;

    // 02. Actualizamos el indice de la imagen del fondo
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;

    // 03. Mostramos la imagen con opacidad 1
    backgroundImages[currentBackgroundIndex].style.opacity = 1;
}

changeBackgroundButton.addEventListener('click', changeBackground);