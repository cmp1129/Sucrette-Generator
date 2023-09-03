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

// 00. Mover contenedor por la pantalla
const infoContainer = document.getElementById('info-container');
        let isDragging = false;
        let offsetX, offsetY;

        infoContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - infoContainer.getBoundingClientRect().left;
            offsetY = e.clientY - infoContainer.getBoundingClientRect().top;
            infoContainer.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            infoContainer.style.left = x + 'px';
            infoContainer.style.top = y + 'px';
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            infoContainer.style.cursor = 'grab';
});