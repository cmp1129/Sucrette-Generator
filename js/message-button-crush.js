// 00. Esperamos a que se cague el contenido de la pagina con DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    const messageButtonCrush = document.getElementById("message-crush");
    const closeButtonCrush = document.getElementById("close-button-crush");
    const messageContainerCrush = document.getElementById("message-container-crush");
    
    // 01. Mostramos el elemento en la pagina
    messageButtonCrush.addEventListener("click", function () {
        messageContainerCrush.style.display = "block";
    });
    
    // 02. Ocultamos el elemento en la pagina
    closeButtonCrush.addEventListener("click", function () {
        messageContainerCrush.style.display = "none";
    });
});

// 00. Mini Crushes
document.getElementById('castielButton').addEventListener('click', function() {
    const imageSrc = this.getAttribute('data-image-src');
    openImageInNewTab(imageSrc);
});

document.getElementById('nathButton').addEventListener('click', function() {
    const imageSrc = this.getAttribute('data-image-src');
    openImageInNewTab(imageSrc);
});

document.getElementById('kenButton').addEventListener('click', function() {
    const imageSrc = this.getAttribute('data-image-src');
    openImageInNewTab(imageSrc);
});

document.getElementById('lysButton').addEventListener('click', function() {
    const imageSrc = this.getAttribute('data-image-src');
    openImageInNewTab(imageSrc);
});

document.getElementById('arminButton').addEventListener('click', function() {
    const imageSrc = this.getAttribute('data-image-src');
    openImageInNewTab(imageSrc);
});

// Función para abrir la imagen en una nueva pestaña
function openImageInNewTab(imageSrc) {
    window.open(imageSrc, '_blank');
}
