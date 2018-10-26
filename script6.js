//recursividad: proceso en el que una funcion se llama a si misma, es para disminuir el coste de un algoritmo cuando hacemos referencia a un loop(bucle). Esto tendria un coste lineal. Otra mejora es que ocupa menos codigo que un for, pero son mas complejas de netender.
//una funcion que se llama a si misma, tendria que tener una salida, porque sino haria un bucle infinito.
function factorial(N){
    if(N==0) return 1;
    else
    return N*factorial(N-1);
}
// al llamar a la funcion propiamente diciendo que se multiplique pro el mismo menos 1. en este caso la salida es el if.
console.log(factorial(4));
//los objetos permiten representar conceptos en el mundo de la programacion.