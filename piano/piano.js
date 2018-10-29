

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


