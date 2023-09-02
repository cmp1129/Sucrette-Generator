// Obtén una lista de todas las imágenes de la ropa
const overlayImages = document.querySelectorAll('.overlay-image');

// Obtén los botones de "Back" y "Next" para la ropa
const backButton = document.getElementById('backButtonClothes');
const nextButton = document.getElementById('nextButtonClothes');

let currentIndex = 0;

// Función para ocultar todas las imágenes de la ropa
function hideAllImages() {
    overlayImages.forEach(image => {
        image.style.display = 'none';
    });
}

// Función para mostrar la imagen en el índice dado
function showImage(index) {
    // Oculta todas las imágenes de la ropa
    hideAllImages();

    // Muestra la imagen en el índice actual
    overlayImages[index].style.display = 'block';
}

// Muestra la primera imagen de ropa al cargar la página
showImage(currentIndex);

// Manejador de clics para el botón "Back" de la ropa
backButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + overlayImages.length) % overlayImages.length;
    showImage(currentIndex);
});

// Manejador de clics para el botón "Next" de la ropa
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % overlayImages.length;
    showImage(currentIndex);
});
