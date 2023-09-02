const ontopimages = document.querySelectorAll('.ontop-image');
const hairButtonBack = document.getElementById('backButtonHair');
const hairButtonNext = document.getElementById('nextButtonHair');

let currentIndexHair = 0;

function hideAllHairImages() {
    ontopimages.forEach(image => {
        image.style.display = 'none';
    });
}

function showHairImage(index) {
    hideAllHairImages();
    ontopimages[index].style.display = 'block';
}

showHairImage(currentIndexHair);

hairButtonBack.addEventListener('click', () => {
    currentIndexHair = (currentIndexHair - 1 + ontopimages.length) % ontopimages.length;
    showHairImage(currentIndexHair);
});

hairButtonNext.addEventListener('click', () => {
    currentIndexHair = (currentIndexHair + 1) % ontopimages.length;
    showHairImage(currentIndexHair);
});