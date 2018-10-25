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
    if (op=='-') return num1-num2;
    else if(op=='+') return num1+num2;
    else if(op=='*') return num1*num2;
    else if(op=='/') {
        if (num2==0) return 0;
        else return num1/num2;
    }
}

console.log(OperarNumeros(4, 8, '+'));
console.log(OperarNumeros(4, 8, '-'));
console.log(OperarNumeros(4, 8, '/'));
console.log(OperarNumeros(4, 8, '*'));
console.log(OperarNumeros(4, 0, '/'));