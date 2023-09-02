// Obtén una lista de todas las imágenes de la ropa
const ontopimages = document.querySelectorAll('.ontop-image');

// Obtén los botones de "Back" y "Next" para la ropa
const hairButtonBack = document.getElementById('backButtonHair');
const hairButtonNext = document.getElementById('nextButtonHair');

let currentIndexHair = 0;

// Función para ocultar todas las imágenes de la ropa
function hideAllHairImages() {
    ontopimages.forEach(image => {
        image.style.display = 'none';
    });
}

// Función para mostrar la imagen de ropa en el índice dado
function showHairImage(index) {
    // Oculta todas las imágenes de la ropa
    hideAllHairImages();

    // Muestra la imagen de ropa en el índice actual
    ontopimages[index].style.display = 'block';
}

// Muestra la primera imagen de ropa al cargar la página
showHairImage(currentIndexHair);

// Manejador de clics para el botón "Back" de la ropa
hairButtonBack.addEventListener('click', () => {
    currentIndexHair = (currentIndexHair - 1 + ontopimages.length) % ontopimages.length;
    showHairImage(currentIndexHair);
});

// Manejador de clics para el botón "Next" de la ropa
hairButtonNext.addEventListener('click', () => {
    currentIndexHair = (currentIndexHair + 1) % ontopimages.length;
    showHairImage(currentIndexHair);
});