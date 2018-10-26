let u1_name = 'Carlos';
let u1_apellido = 'Hernandez';
let u2_name = 'papi';
let u2_apellido = 'Hernandez';
let u3_name = 'lario';
let u3_apellido = 'Hernandez';
console.log(u1_name + ' ' + u1_apellido);
console.log(u2_name + ' ' + u2_apellido);
console.log(u3_name + ' ' + u3_apellido);
// // una funcion es capaz de almacenar una secuencia de instrucciones a ejecutar.Incluso los objetos son funciones
// //se recuerda que concatenar dos parametros se hace con el simbolo de mas, la coma nos muestra dos valores
function GenerarNombreCompleto(unNombre, unApellido) {
    let nombre_mod = '*' + unNombre + '*';
    return unNombre + ' ' + unApellido;
}
console.log(GenerarNombreCompleto(u1_name, u1_apellido));
console.log(GenerarNombreCompleto(u2_name, u2_apellido));
console.log(GenerarNombreCompleto(u3_name, u3_apellido));



function OperarNumeros(num1, num2, op) {
    if (op == '-') return num1 - num2;
    else if (op == '+') return num1 + num2;
    else if (op == '*') return num1 * num2;
    else if (op == '/') {
        if (num2 == 0) return 0;
        else return num1 / num2;
    }
}


let papi = [5, 87, 33, 5];


function operarnumerosarr(arr, op) {
    let total;
    let i = 0;
    if (op == '+') {
        total=0;
        while (i < 4) {
            total = papi[i] + total;
            i++;
        }
    }
    if (op == '-') {
        total=0;
        while (i < 4) {
            total = total-papi[i];
            i++;
        }
    }
    if (op == '*') {
        total=1;
        while (i < 4) {
            total = papi[i] * total;
            i++;
        }
    }
    if (op == '/') {
        total=1;
        while (i < 4) {
            total = papi[i] / total;
            i++;
        }
    }
    return total;
}

console.log(operarnumerosarr(papi, '+')); //130
console.log(operarnumerosarr(papi, '-'));
console.log(operarnumerosarr(papi, '*'));
console.log(operarnumerosarr(papi, '/'));

console.log(OperarNumeros(4, 8, '+'));
console.log(OperarNumeros(4, 8, '-'));
console.log(OperarNumeros(4, 8, '/'));
console.log(OperarNumeros(4, 8, '*'));
console.log(OperarNumeros(4, 0, '/'));

// resultado+=arr[index] es lo mismo que resultado=resultado+arr

function opNumArr(arr, op) {
    let resultado;

    if (op == '+') {
        resultado = 0;
        for (let index = 0; index < arr.length; index++) {
            resultado += arr[index];
        }
    } else if (op == '-') {
        resultado = 0;
        for (let index = 0; index < arr.length; index++) {
            if (index == 0) resultado = arr[index];
            else resultado -= arr[index];
        }
    } else if (op == '*') {
        resultado = 1;
        for (let index = 0; index < arr.length; index++) {
            resultado *= arr[index];
        }
    } else if (op == '/') {
        for (let index = 0; index < arr.length; index++) {
            if (index == 0) resultado = arr[index];
            else resultado /= arr[index];
        }
    }

    return resultado;
}

let arr_nums = [1, 2, 3, 4];

console.log("RESULTADOS ARRAY");
console.log(opNumArr(arr_nums, '+')); //10
console.log(opNumArr(arr_nums, '-')); //-8
console.log(opNumArr(arr_nums, '*')); //24
console.log(opNumArr(arr_nums, '/')); //0.0416666