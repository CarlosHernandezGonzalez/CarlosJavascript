//los workers permiten generar un hilo paralelo donde s epueden realizar diferentes trabajos.
let w=new Worker('./worker.js');

// w.postMessage('hooola');

// w.onmessage=function(mess){
//     console.log(mess.data);
// }

let vect=[1,2,3,4];
w.postMessage(vect)
w.onmessage=function(mess){
    console.log(mess.data);
}