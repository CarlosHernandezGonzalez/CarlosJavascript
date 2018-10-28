
// function opNumArr(arr, op) {
//     let resultado;

//     if (op == '+') {
//         resultado = 0;
//         for (let index = 0; index < arr.length; index++) {
//             resultado += arr[index];
//         }
//     } else if (op == '-') {
//         resultado = 0;
//         for (let index = 0; index < arr.length; index++) {
//             if (index == 0) resultado = arr[index];
//             else resultado -= arr[index];
//         }
//     } else if (op == '*') {
//         resultado = 1;
//         for (let index = 0; index < arr.length; index++) {
//             resultado *= arr[index];
//         }
//     } else if (op == '/') {
//         for (let index = 0; index < arr.length; index++) {
//             if (index == 0) resultado = arr[index];
//             else resultado /= arr[index];
//         }
//     }

//     return resultado;
// }

function opNumArr(arr, op) {
    let resultado;
    if (op == '+') {
        resultado = 0;
    }
    else if (op == '-') {
        resultado = 0;
    }
    else {
        resultado = 1;
    }

    for (let i = 0; i < arr.length; i++) {

        if (op == '+') {
            resultado = arr[i] + resultado;
        }

        if (op == '-') {
            if (i == 0) { resultado = arr[i] }
            else { resultado = resultado - arr[i] };
        }

        if (op == '*') {
            resultado = arr[i] * resultado;
        }

        if (op == '/') {
            if (i == 0) { resultado = arr[i] }
            else { resultado = resultado / arr[i] };
        }

    }
    return resultado;
}

let papote = [1, 2, 3, 4];

console.log(opNumArr(papote, '+')); //10
console.log(opNumArr(papote, '-')); //-8
console.log(opNumArr(papote, '*')); //24
console.log(opNumArr(papote, '/')); //0.0416666