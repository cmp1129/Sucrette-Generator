const centeredImages = document.querySelectorAll('.centered-image');
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

function showImage(index) {
    centeredImages.forEach(image => {
        image.style.display = 'none';
    });
    centeredImages[index].style.display = 'block';
}

showImage(currentIndex);

backButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + centeredImages.length) % centeredImages.length;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % centeredImages.length;
    showImage(currentIndex);
});
