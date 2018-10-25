var meses=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
console.log('meses:',meses[0],',',meses[6],',',meses[10],'y',meses[meses.length-1], 'es frio');
// si se tiene linkado en el html otro script, se correran en el orden en el que estan puestos en el html.
var peso=80;
var altura=180;
var esta_cachas=false;

if(peso<=altura-100-20){esta_cachas=false;
console.log('come mas')
}
    else if(peso<=altura-100) {esta_cachas=true;
    console.log('que cachas estas');}

        else{esta_cachas=false; console.log('ponte a hacer ejercicio, vago, te sobran ',peso-(altura-120), 'kilos');}


// todo lo que esta dentro de las llaves se ejecutara, por lo tanto si esta cachas se display lo de ponte a hacer ejercicio, ya que le hemos dado el valor de false a la variable y el if indica si eso ocurre ponme eso, y el else es lo contrario
// lo mas restrictivo dentro del if es lo que se pone primero
// else if puede haber muchos, pero if y else solo uno, sabiendo que el else es el que nos va a indicar la excepcion con respecto al resto de los casos

var num1=0;
var num2=44;
var num3=332;
if (num1>num2){
 if(num1>num3){console.log(num1);}
else{console.log(num3);}
}
if (num2>num1){
 if(num2>num3){console.log(num2);}
 else{console.log(num3);}
}
else{console.log(num3);}

// con esta estructura queremos saber cambiando el num1 2 o 3 cual de los numeros va a ser mayor, pero tenemos que darnos cuenta que dentro de un if, podemos incluir otro a traves de las llaves. pero solo nos puede servir para pocos grupos, los if emiten condiciones.

