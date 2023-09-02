// 01. Message Crush Sound
const hoverSound = document.getElementById('hoverSound');
const messageCrushSound = document.getElementById('message-crush');

messageCrushSound.addEventListener('mouseenter', () => {
    hoverSound.play();
});

// 02. Roulette Sound
const rouletteSound = document.getElementById('rouletteSound');
const randomizeSound = document.getElementById('randomize');

randomizeSound.addEventListener('mouseenter', () => {
    rouletteSound.play();
});

// 03. Info Sound
const popupSound = document.getElementById('popupSound');
const infoButtonSound = document.getElementById('info-button');
const closeButtonSound = document.getElementById('close-button');

infoButtonSound.addEventListener('mouseenter', () => {
    popupSound.play();
});

closeButtonSound.addEventListener('mouseenter', () => {
    popupSound.play();
});