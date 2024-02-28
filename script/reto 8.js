// Creamos los elementos necesarios para añadir a la página:
let piePagina = document.createElement('div');
let parrafo = document.createElement('p');
parrafo.textContent = "Curso de HTML, CSS y JavaScript del CRFPTIC de Castilla y León";

// Seleccionamos el elemento al que vamos a añadir el nuevo contenido; en este caso el body.
let pagina = document.querySelector('body');

// Incluimos el párrafo en el div creado:
piePagina.appendChild(parrafo);

// Insertamos el div en el documento:
pagina.appendChild(piePagina);
