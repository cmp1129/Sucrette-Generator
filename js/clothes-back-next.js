const overlayImages = document.querySelectorAll('.overlay-image');
const clothesButtonBack = document.getElementById('clothesButtonBack');
const clothesButtonNext = document.getElementById('clothesButtonNext');

let currentIndexClothes = 0;

function hideAllClothingImages() {
    overlayImages.forEach(image => {
        image.style.display = 'none';
    });
}

function showClothingImage(index) {
    hideAllClothingImages();

    overlayImages[index].style.display = 'block';
}

showClothingImage(currentIndexClothes);

clothesButtonBack.addEventListener('click', () => {
    currentIndexClothes = (currentIndexClothes - 1 + overlayImages.length) % overlayImages.length;
    showClothingImage(currentIndexClothes);
});

clothesButtonNext.addEventListener('click', () => {
    currentIndexClothes = (currentIndexClothes + 1) % overlayImages.length;
    showClothingImage(currentIndexClothes);
});
