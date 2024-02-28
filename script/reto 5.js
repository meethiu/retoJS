// Guardamos la contraseña en una constante.
const PASSWD = "retoJS";

// Definimos una variable para guardar el texto introducido por el visitante
let palabra;

// Creamos un bucle en el que se pide una palabra...
do {
    palabra = prompt("Indique la clave de acceso al contenido:");

    // Dentro del bucle comprobamos si la clave es la correcta.
    // Si lo es, finalizaremos el bucle (y por tanto el script).
    if (palabra === PASSWD) {
        break;
    } else {
        alert("Contraseña incorrecta. Inténtelo de nuevo.");
    }
} while (true); // El bucle se repetirá continuamente hasta que se introduzca la contraseña correcta.
