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