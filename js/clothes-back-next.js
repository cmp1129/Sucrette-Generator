// Obtén una lista de todas las imágenes de la ropa
const overlayImages = document.querySelectorAll('.overlay-image');

// Obtén los botones de "Back" y "Next" para la ropa
const clothesButtonBack = document.getElementById('clothesButtonBack');
const clothesButtonNext = document.getElementById('clothesButtonNext');

let currentIndexClothes = 0;

// Función para ocultar todas las imágenes de la ropa
function hideAllClothingImages() {
    overlayImages.forEach(image => {
        image.style.display = 'none';
    });
}

// Función para mostrar la imagen de ropa en el índice dado
function showClothingImage(index) {
    // Oculta todas las imágenes de la ropa
    hideAllClothingImages();

    // Muestra la imagen de ropa en el índice actual
    overlayImages[index].style.display = 'block';
}

// Muestra la primera imagen de ropa al cargar la página
showClothingImage(currentIndexClothes);

// Manejador de clics para el botón "Back" de la ropa
clothesButtonBack.addEventListener('click', () => {
    currentIndexClothes = (currentIndexClothes - 1 + overlayImages.length) % overlayImages.length;
    showClothingImage(currentIndexClothes);
});

// Manejador de clics para el botón "Next" de la ropa
clothesButtonNext.addEventListener('click', () => {
    currentIndexClothes = (currentIndexClothes + 1) % overlayImages.length;
    showClothingImage(currentIndexClothes);
});
