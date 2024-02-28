// Para guardar los encabezados del documento, del nivel que sean,
// usaremos los selectores de etiqueta junto a querySelectorAll():
let encabezados = document.querySelectorAll('h1,h2,h3,h4,h5,h6');

// Para acceder a los elementos de lista en los divs usaremos 
// el selector de descendientes junto a las etiquetas adecuadas (li, dd, dt)
let elementosDeLista = document.querySelectorAll('div li, div dl, div dt');

// Para que primerParrafo almacene el primer párrafo del article 
// podemos usar querySelector(), que devuelve un solo elemento.
let primerParrafo = document.querySelector('div#destacado p');

// Guardaremos en fotoCabecera las imágenes existentes en el  
// div con clase 'ilustrado' usando el selector adecuado y querySelectorAll()
let fotoCabecera = document.querySelectorAll('div.ilustrado img');
