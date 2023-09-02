function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

// Función que genera de forma Aleatoria un Avatar
function randomizeAvatarAndClothes() {
    const centeredImagesRand = document.querySelectorAll('.centered-image');
    const overlayImagesRand = document.querySelectorAll('.overlay-image');

    // 01. Obtenemos un índice aleatorio del avatar y la ropa
    const randomAvatarIndex = getRandomIndex(centeredImagesRand.length);
    const randomClothesIndex = getRandomIndex(overlayImagesRand.length);

    // 02. Mostramos por pantalla el avatar y la ropa aleatoriamente
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

const randomizeButton = document.getElementById('randomize');

randomizeButton.addEventListener('click', () => {
    randomizeAvatarAndClothes(); 
});

