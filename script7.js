let ricardo = {//las llaves tienen punto y coma despues solo cuando hace referencia a objetos
    nombre: 'Ricardo',
    apellido: 'Ahumada',
    email: 'r@r.es',
    edad: 41,
    gustanvideojuegos: true,
    juegavideojuegos: false,
    saludar: function () {
        return "Hooola, me llamo " + this.nombre + "; tengo" + ' ' + this.edad + ' ' + "años y juego videojuegos.";
    }//se le puede dar funcion a un objeto como se muestra arriba.
    //programacion dirigida a objetos es la que se dedica a utilizar estos
};
let papi = {//las llaves tienen punto y coma despues solo cuando hace referencia a objetos
    nombre: 'papi',
    apellido: 'papito',
    email: 'r@r.es',
    edad: 41,
    gustanvideojuegos: true,
    juegavideojuegos: false
};

// declarar siempre el nombre de las variables, de manera que no compartan nunca nombre.

//clase es una plantilla para definir que forma van a tener unos objetos concretos

console.log(ricardo);
console.log('apellido', ricardo.apellido);
console.log('qte gustan llos videojuegos', ricardo.gustanvideojuegos);
console.log(ricardo.saludar());

console.log('apellido', papi.apellido);
console.log('qte gustan llos videojuegos', papi.gustanvideojuegos);


let gestion = [


    {
        id: 32143,
        nombre: 'Ricardo',
        edad: '41',
        shoinfo: function () {
            return '[' + this.id + ']' + this.nombre + ',' + this.edad;
        }
    },

    {
        id: 32144,
        nombre: 'Carlos',
        edad: '22', shoinfo: function () {
            return '[' + this.id + ']' + this.nombre + ',' + this.edad;
        }
    },

    {
        id: 32145,
        nombre: 'adela',
        edad: '20',
        shoinfo: function () {
            return '[' + this.id + ']' + this.nombre + ',' + this.edad;
        }
    },

    {
        id: 32146,
        nombre: 'marta',
        edad: '25',
        shoinfo: function () {
            return '[' + this.id + ']' + this.nombre + ',' + this.edad;
        }
    },

    {
        id: 32147,
        nombre: 'elena',
        edad: '23',
        shoinfo: function () {
            return '[' + this.id + ']' + this.nombre + ',' + this.edad;
        }
    },

    {
        id: 32148,
        nombre: 'carmen',
        edad: '21',
        shoinfo: function () {
            return '[' + this.id + ']' + this.nombre + ',' + this.edad;
        }
    },

    {
        id: 32149,
        nombre: 'rocio',
        edad: '32',
        shoinfo: function () {
            return '[' + this.id + ']' + this.nombre + ',' + this.edad;
        }

    },

    {
        id: 32150,
        nombre: 'selena',
        edad: '22',
        shoinfo: function () {
            return '[' + this.id + ']' + this.nombre + ',' + this.edad;
        }
    },
];



for (let i = 0; i < gestion.length; i++) {
    console.log(gestion[i].shoinfo());
}


//hay dos maneras de definir una clase
//ES5, se definen mediante funciones, aqui si se usan ; en vez de comas
let persona = function (id, nom, ed) {
    this.id = id;
    this.nombre = nom;
    this.edad = ed;
    this.shoinfo = function () {
        //         return '[' + this.id + ']' + this.nombre + ',' + this.edad;
    }
}
console.log(persona);

let mami = new persona(1, 'ricardo', 32);
ricardo.id = 1;
ricardo.nombre = 'ricardo'
ricardo.edad = 35;
console.log(mami);

let clase = [
    new persona(32150, 'selena', '22'),
    new persona(3214, 'carmen', '21'),
];
for (let index = 0; index < clase.length; index++) {
    console.log(clase[index].shoinfo());
}

//para poner las cualidades dentro de la clase, al haber definido antes el showinfo, en let persona, no podemos olvidar poner los parentesis despues de la funcion, ya que no tiene parametros ahi
//tenemos una plantilla, que es lo que se llama class, y despues se puede completar una vez puesto


//ES6, esto es para la version 6, es otra sintaxis, esto hace lo mismo que el ES5 para la opcion class.
class persona2 {
    constructor(id, nom, ed) {
        this.id = id;
        this.nombre = nom;
        this.edad = ed;
    }

    dimelainfo() {
        return '[' + this.id + ']' + this.nombre + ',' + this.edad;
    }
}

let clase2 = [
    new persona2(32150, 'selena', '22'),
    new persona2(3214, 'carmen', '21'),
];
for (let index = 0; index < clase2.length; index++) {
    console.log(clase2[index].dimelainfo());
}