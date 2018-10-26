function concatenar(str1, str2) {
    return str1 + ' ' + str2;
}
console.log(concatenar('hola', 'mundo'));

var concatenar2 = function (str1, str2) {
    return str1 + ' ' + str2;
}
const concatenar3 = function (str1, str2) {
    return str1 + ' ' + str2;
}
//se puede poner una funcion como variable o como constante
console.log(concatenar2('hola', 'mundo'));
// ES6(version 6 de javascript) tenemos let para las variables y const para las constantes.

// se puede definir una funcion anonima (debido a que no tiene nombre) y por lo tanto no se puede invocar.
//las funciones anonimas se invocan de la siguiente manera, a traves de parentesis
(function (texto) {
    console.log(texto);
})('hola Mundo');1