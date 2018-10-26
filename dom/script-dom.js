//el obnjeto document en su totalidad incluye absolutamente todo lo referido a la pagina web.
//por lo que se puede acceder a cualquier documento de la pagina.
//document.getelementbyid('nombre') te permite acceder al identificador que hayas indicado.
// typeof sirve para saber la tipologia de un tag usado, para saber si es un objeto o cualquier cosa
// document.getelementbyid('nombre').innerHTML se refiere al valor interno de un propio tag, nos estaria dando la informacion del propio id escogido.
//el cuerpo de un tag es el string, por lo que puedes darle otras funciones

let cambiarboton = document.getElementById('cambiarbtn');
cambiarboton.onclick = function () {
    let elparrafo = document.getElementById('papi');

    elparrafo.innerHTML = elparrafo.innerHTML.toUpperCase();
};

let cambiarboton2 = document.getElementById('cambiarbtn2');
cambiarboton2.onclick = function () {
    let elparrafo = document.getElementById('papi');
    elparrafo.innerHTML = elparrafo.innerHTML.toLocaleLowerCase();
}
