<<<<<<< HEAD


let notas = [
    { nombre: 'do', sonido: './wav/c1.wav', tono: true },
    { nombre: 'dos', sonido: './wav/c1s.wav', tono: false },
    { nombre: 're', sonido: './wav/d1.wav', tono: true },
    { nombre: 'res', sonido: './wav/d1s.wav', tono: false },
    { nombre: 'mi', sonido: './wav/e1.wav', tono: true },
    { nombre: 'fa', sonido: './wav/f1.wav', tono: true },
    { nombre: 'fas', sonido: './wav/f1s.wav', tono: false },
    { nombre: 'sol', sonido: './wav/g1.wav', tono: true },
    { nombre: 'sols', sonido: './wav/g1s.wav', tono: false },
    { nombre: 'la', sonido: './wav/a1.wav', tono: true },
    { nombre: 'las', sonido: './wav/a1s.wav', tono: false },
    { nombre: 'si', sonido: './wav/b1.wav', tono: true },
];

function generateStructure(arrNotes, divN) {
    let finalHtml = '';

    arrNotes.forEach(element => {
        finalHtml += element.tono ? `<div class="note" data-snd="${element.sonido}"></div>` : `<div class="note semi" data-snd="${element.sonido}"></div>`;
    });

    document.getElementById(divN).innerHTML = finalHtml;
    associateAndPlayNotes();
}

function associateAndPlayNotes() {
    let player = document.getElementById('player');

    document.querySelectorAll('.note').forEach(element => {
        element.onclick = function () {
            player.src = this.getAttribute('data-snd');
            player.play();
        }
    });

}
generateStructure(notas,'piano');

// el foreach va a concatenar todo un array.
//si solo tengo un parametro dentro de la funcion, nmo necesito ponerlo entre parentesis, basta con poner el nombre de ese parametro.
//queryselectorAll es equivalente a un selector css, con su formato. por lo que al llamar al .note podemos seleccionar a toda la clase note, y tambien pede identificar a mas objetos, por ejemplo si tenemos mas pianos.
//En html tenemos dos clases asociadas si separamos la clase por espacios, en el caso de este ejemplo, tenemos class='note semi', por lo que tiene la clase note y la clase semi.
//la flecha significa lo mismo que si fuera una funcion.


//expresiones lambda, en el cuale l cuerpo les pasas las ufnciones de callback.
=======


let notas=[

    {nombre: 'do', sonido: './wav/a1.wav', tono= 'true'},
    {nombre: 'falsosol', sonido: './wav/a1s.wav', tono= 'false'},
    {nombre: 're', sonido: './wav/b1.wav', tono= 'true'},
    {nombre: 'falsola', sonido: './wav/b1s.wav', tono= 'false'},
    {nombre: 'mi', sonido: './wav/c1.wav', tono= 'true'},
    {nombre: 'fa', sonido: './wav/d1.wav', tono= 'true'},
    {nombre: 'falsosi', sonido: './wav/c1s.wav', tono= 'false'},
    {nombre: 'sol', sonido: './wav/e1.wav', tono= 'true'},
    {nombre: 'falsodo', sonido: './wav/d1s.wav', tono= 'false'},
    {nombre: 'la', sonido: './wav/f1.wav', tono= 'true'},
    {nombre: 'falsore', sonido: './wav/e1s.wav', tono= 'false'},
    {nombre: 'si', sonido: './wav/g1s.wav', tono= 'true'},   
];
function musica(piano) {
    let section = document.getElementById('piano');

    for (let index = 0; index < piano.length; index++) {
        // listaUl.innerHTML =listaUl.innerHTML+'<li>' +piano[index].nombre+'</li>';
        section.innerHTML += 
        `<div><button class='saluda' data-value='${piano[index].sonido} ${piano[index].tono}'></button></div>`;
    }
    musica(notas);

}


>>>>>>> a530c688ec780fc2dbc01c17ff507f447320f730
