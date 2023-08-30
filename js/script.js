// BACKGROUND IMAGES
const backgroundImages = document.querySelectorAll('.background-image');
const changeBackgroundButton = document.getElementById('changeBackgroundButton');

let currentBackgroundIndex = 0;

function changeBackground() {
    backgroundImages[currentBackgroundIndex].style.opacity = 0;
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
    backgroundImages[currentBackgroundIndex].style.opacity = 1;
}

changeBackgroundButton.addEventListener('click', changeBackground);

// AVATAR IMAGES
const avatarImages = document.querySelectorAll('.avatar-image');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentAvatarIndex = 0;

function changeAvatarImage(index) {
    avatarImages.forEach(image => {
        image.classList.remove('active');
    });

    avatarImages[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
    currentAvatarIndex = (currentAvatarIndex - 1 + avatarImages.length) % avatarImages.length;
    changeAvatarImage(currentAvatarIndex);
});

nextButton.addEventListener('click', () => {
    currentAvatarIndex = (currentAvatarIndex + 1) % avatarImages.length;
    changeAvatarImage(currentAvatarIndex);
});

// Inicializa la primera imagen como activa
changeAvatarImage(currentAvatarIndex);




