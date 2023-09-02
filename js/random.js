function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function randomizeAvatarAndClothes() {
    const centeredImagesRand = document.querySelectorAll('.centered-image');
    const overlayImagesRand = document.querySelectorAll('.overlay-image');

    // Obtén un índice aleatorio para el avatar y la ropa
    const randomAvatarIndex = getRandomIndex(centeredImagesRand.length);
    const randomClothesIndex = getRandomIndex(overlayImagesRand.length);

    // Muestra el avatar y la ropa aleatorios
    centeredImagesRand.forEach((image, index) => {
        if (index === randomAvatarIndex) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

    overlayImagesRand.forEach((image, index) => {
        if (index === randomClothesIndex) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Obtén una referencia al botón
const randomizeButton = document.getElementById('randomize');

// Agrega un EventListener al botón
randomizeButton.addEventListener('click', () => {
    randomizeAvatarAndClothes(); 
});

