// 00. Esperamos a que se cague el contenido de la pagina con DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    const infoButton = document.getElementById("info-button");
    const closeButton = document.getElementById("close-button");
    const infoContainer = document.getElementById("info-container");
    
    // 01. Mostramos el elemento en la pagina
    infoButton.addEventListener("click", function () {
        infoContainer.style.display = "block";
    });
    
    // 02. Ocultamos el elemento en la pagina
    closeButton.addEventListener("click", function () {
        infoContainer.style.display = "none";
    });
});