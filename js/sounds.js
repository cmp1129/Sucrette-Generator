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
const closeButtonCrush = document.getElementById('close-button-crush');

infoButtonSound.addEventListener('mouseenter', () => {
    popupSound.play();
});

closeButtonSound.addEventListener('mouseenter', () => {
    popupSound.play();
});

closeButtonCrush.addEventListener('mouseenter', () => {
    popupSound.play();
});

// BACKGROUND MUSIC
const audio = document.getElementById('background-music');
const toggleMusicButton = document.getElementById('toggle-music-button');

// Función para pausar o reproducir la música
function toggleMusic() {
    if (audio.paused) {
        audio.play();
        toggleMusicButton.textContent = '🔊';
        
    } else {
        audio.pause();
        toggleMusicButton.textContent = '🔇';
    }
}

toggleMusicButton.addEventListener('click', toggleMusic);