var mis_numeros_hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
console.log[mis_numeros_hex];

mis_numeros_hex[3] = 45;
mis_numeros_hex[12] = 'xx';

console.log(mis_numeros_hex);

//los loops me permiten evaluar una lista de elementos repitiendo el mismo proceso n veces
for (let index = 0; index < mis_numeros_hex.length; index = index + 2) {
    console.log('el valor en el indice:', index, 'es', mis_numeros_hex[index]);

} //para la variable que va a comenzar en cero pero que va a terminar antes del tamaño del array, voy a ir añadiendo 1 dentro del array y va a ir dentro, por lo tanto se generan loops definidos.

let mascotita = [];
mascotita[0] = 'max';
for (let index = 1; index < 1001; index++) {
    mascotita[index] = 'max' + (index);
}

let index = 0;
while (index < 1001) {
    console.log(mascotita[index], 'es hermano de', mascotita[index - 1]);
    index++;
}

// for (let index = 0; index < 1001; index++) {
//     if(index==0){
//         console.log('max no tiene hermano');

//     }
//     else if(index==1){console.log('')}
//     else{
//         console.log(mascotita[index],'es hermano de', mascotita[index-1]);
//     }
//     console.log('la mascota',index,'se llama', mascotita[index]);    
// }


//hay mas loops aparte de for
