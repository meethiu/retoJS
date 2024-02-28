const ALU = document.querySelector('#nombre');

document.querySelector('html').addEventListener('click', addNombre);

function addNombre() {
    let nombre = prompt('Indica tu nombre');
    ALU.textContent = nombre;
}
