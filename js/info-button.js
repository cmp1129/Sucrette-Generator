document.addEventListener("DOMContentLoaded", function () {
    const infoButton = document.getElementById("info-button");
    const closeButton = document.getElementById("close-button");
    const infoContainer = document.getElementById("info-container");
    
    infoButton.addEventListener("click", function () {
        infoContainer.style.display = "block";
    });
    
    closeButton.addEventListener("click", function () {
        infoContainer.style.display = "none";
    });
});