let contador = 0;
let numero1 = 3;
let numero2 = 5;
let ingredientes = ['mantequilla', 'azúcar', 'vainilla', 'harina', 'huevo'];
let alumno = "Agustín García del Pozo";

// result01 contiene el valor numérico "27";
let result01 = 27;

// result02 contiene el resultado de añadir a result02 el valor de la variable numero1;
let result02 = 0;
result02 += numero1;

// result03 contiene el valor de contador incrementado en 1;
contador++;
let result03 = contador;

// result04 almacena la suma de numero1 y numero2;
let result04 = numero1 + numero2;

// result05 almacena el resto de dividir result01 entre numero1;
let result05 = result01 % numero1;

// result06 indica si es cierto o no que result04 es menor o igual a numero1;
let result06 = result04 <= numero1;

// result07 indica si el contador se ha incrementado y su valor es menor de 10;
let result07 = contador > 0 && contador < 10;

// result08 guarda el tipo de la variable result07;
let result08 = typeof result07;

// result09 contiene una cadena de caracteres con los tres primeros elementos de ingredientes separados por comas;
let result09 = ingredientes.slice(0, 3).join(", ");

// result10 guarda el tamaño del array ingredientes;
let result10 = ingredientes.length;

// result11 guarda el tamaño del último ingrediente del array;
let result11 = ingredientes[ingredientes.length - 1].length;

// result12 indica (true o false) si el alumno se apellida García;
let result12 = alumno.toUpperCase().includes("GARCÍA");

// result13 almacena el texto que haya hasta el primer espacio en alumno;
let result13 = alumno.substring(0, alumno.indexOf(" "));

