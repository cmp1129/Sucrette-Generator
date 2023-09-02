// Obtén una lista de todas las imágenes centradas
const centeredImages = document.querySelectorAll('.centered-image');

// Obtén los botones de "Back" y "Next"
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

// Función para mostrar la imagen en el índice dado
function showImage(index) {
    // Oculta todas las imágenes
    centeredImages.forEach(image => {
        image.style.display = 'none';
    });

    // Muestra la imagen en el índice actual
    centeredImages[index].style.display = 'block';
}

// Muestra la primera imagen al cargar la página
showImage(currentIndex);

// Manejador de clics para el botón "Back"
backButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + centeredImages.length) % centeredImages.length;
    showImage(currentIndex);
});

// Manejador de clics para el botón "Next"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % centeredImages.length;
    showImage(currentIndex);
});
