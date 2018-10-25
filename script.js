var nombre="Carlos";
console.log('el Nombre es:',nombre);
var apellido="Hernandez";
console.log('el apellido es:',apellido);
var nombre_completo=nombre+""+apellido;

console.log('el Nombre completo es:',nombre_completo);
// cada coma que se ha puesto, indica una variable a mostrar
// El console.log escupe el resultado de lo que hay dentro de la console
// cada vez que quiera saber el valor de cada variable tendre que usar un console log para ver como van variando

var mis_numeros_hex=[1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
console.log('mis_numeros_hex:',mis_numeros_hex);
// array es un conjunto de datos unidimensional, por lo que un array permite manejar un conjunto de datos como un solo MediaElementAudioSourceNode, la primera posicion tiene la posicion 0 y el ultimo tendra la posicion n-1 (es como un vector). Lo que se expresa dentro del conjunto, si hay texto se tiene que poner entre comillas, despues del array ira con corchetes.
// denbtro de la consola de navegacion, si pones el nombnre que le hayas dado el array y entre corchetes pones un numero, te dara el dato que se encuentre en esa posicion del vector. Ejemplo: mis_numeros_hex[5] me dara como resultado el 6, ya que l aprimera posicion como se ha dicho es la posicion 0 mis_numeros_hex[0] y la ultima posicion siempre sera la ultima posicion menos 1.
// para saber el numero de elementos del array Se hace añadiendo un .length despues del nombre del array creado
mis_numeros_hex.length;
// por lo que para acceder a la ultima posicion del array se hara con el comando del nombre[nombre.length-1]
mis_numeros_hex[mis_numeros_hex.length-1];
console.log('primero y ultimo:',mis_numeros_hex[0],mis_numeros_hex[mis_numeros_hex.length-1]);
