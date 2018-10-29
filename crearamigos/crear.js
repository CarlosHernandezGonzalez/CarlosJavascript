let amigos = [


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

//parsear es coger unb elemento de un formato, en este caso javascript y pasarlo oa otro formato o como es en este caso html.
function parseaAmigos(listAmigos) {
    let listaUl = document.getElementById('lista_amigos');

    for (let index = 0; index < listAmigos.length; index++) {
        // listaUl.innerHTML =listaUl.innerHTML+'<li>' +listAmigos[index].nombre+'</li>';
        listaUl.innerHTML += `<li>
        <span>${listAmigos[index].nombre}</span>
        <span>${listAmigos[index].edad}</span>
        <div><button class='saluda' data-value='${listAmigos[index].nombre} ${listAmigos[index].edad}'>Saludar</button></div>
        </li>`;
    }
    saludando('saluda','data-value');

}


// for (let index = 0; index < amigos.length; index++) {
//     // listaUl.innerHTML =listaUl.innerHTML+'<li>' +amigos[index].nombre+'</li>';
//     listaUl.innerHTML += `<li>
//     <span>${amigos[index].nombre}</span>
//     <span>${amigos[index].edad}</span>
//     <div><button class='saluda' data-value='${amigos[index].edad}'>Saludar</button></div>
//     </li>`;
// }

//procesar

function saludando(claseboton,atributo) {
    let saludarbtns = document.getElementsByClassName(claseboton);
    for (let index = 0; index < saludarbtns.length; index++) {
        saludarbtns[index].onclick = function () {
            alert(this.getAttribute(atributo));
        }
    }
}

parseaAmigos(amigos);


//introduciendo entre comillas el formato html, se ejecutara como un html luego en la consola.
