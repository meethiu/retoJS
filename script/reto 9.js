// Esperamos a que la página esté completamente cargada antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos todas las imágenes presentes en la web
    let imagenes = document.querySelectorAll('img');
    
    // Recorremos todas las imágenes y las eliminamos de sus respectivos padres
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].parentNode.removeChild(imagenes[i]);
    }
});
