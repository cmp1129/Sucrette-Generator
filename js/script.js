const backgroundImages = document.querySelectorAll('.background-image');
const changeBackgroundButton = document.getElementById('changeBackgroundButton');

let currentBackgroundIndex = 0;

function changeBackground() {
    backgroundImages[currentBackgroundIndex].style.opacity = 0;
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
    backgroundImages[currentBackgroundIndex].style.opacity = 1;
}

changeBackgroundButton.addEventListener('click', changeBackground);
