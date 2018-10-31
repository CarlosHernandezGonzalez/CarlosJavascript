console.log(window.localStorage.getItem('palabra_almacenada','valor de la palabra'));
window.localStorage.removeItem('palabra_almacenada');
//guardar algo dentro del local storage puede servir para que funcione una pagina en modo desconectado.

let amigosRetStr=window.localStorage.getItem('lista_amigos');
let amigosRet=JSON.parse(amigosRetStr);

document.getElementById('amigos').innerHTML=(function(){
    let html='';

    amigosRet.forEach(element => {
        html+=`<li>${element.name} | ${element.email}</li>`;
    });
    return html;
}) ();

//para autoinvocar a la funcion basta con poner (); despues de la propia funcion, porque la estas llamando a si misma
//la diferencia entre el sectionStorage y el localStorage es que cuando se cierre la pestaña, con el section al informacion desaparecera.
