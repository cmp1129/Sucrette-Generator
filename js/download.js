// Función para descargar el avatar
function downloadAvatar() {
    // Obtener el elemento del contenedor del avatar
    const avatarContainer = document.querySelector('.centered-image-container');

    // Obtener la imagen dentro del contenedor
    const avatarImage = avatarContainer.querySelector('.centered-image');

    // Crear un lienzo con las mismas dimensiones que la imagen del avatar
    const canvas = document.createElement('canvas');
    canvas.width = avatarImage.width;
    canvas.height = avatarImage.height;

    // Obtener el contexto del lienzo
    const context = canvas.getContext('2d');

    // Dibujar la imagen del avatar en el lienzo
    context.drawImage(avatarImage, 0, 0, canvas.width, canvas.height);

    // Obtener la URL de la imagen en formato base64
    const dataURL = canvas.toDataURL('image/png');

    // Crear un enlace de descarga
    const downloadLink = document.createElement('a');
    downloadLink.href = dataURL;
    downloadLink.download = 'avatar.png'; // Nombre del archivo descargado

    // Simular un clic en el enlace para iniciar la descarga
    downloadLink.click();
}

// Agregar un manejador de eventos al botón de descarga
const downloadButton = document.querySelector('.boton-descarga');
downloadButton.addEventListener('click', downloadAvatar);

