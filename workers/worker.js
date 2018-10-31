onmessage = function (mes) {
    let x = mes.data;
    console.log(x);
    let result = 0
    for (let i = 0; i < x.length; i++) {
        result = x[i] + result;

    }
    this.console.log(result);
}


// onmessage.function(mess){
//     let nums=mess.data;
//     console.log(nums);

//     let result=nums.reduce((ant,act)=>{
//         return ant+=act;
//     });
//     this.postMessage(result);
// }

// con esto lo que hacemos es que el reduce nos da el valor de un array anterior, y el del posterior, esos son los parametros, se puede hacer tambien con el for de arriba, y obtendriamos el mismo resultado.