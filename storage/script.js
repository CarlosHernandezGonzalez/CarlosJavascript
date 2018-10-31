let amigos = [
{name:'Ricardo',email: `a@a`},
{name:'mart',email: `w@w`},
{name:'mik',email: `d@d`},
{name:'chil',email: `c@c`},
{name:'papi',email: `b@b`},
];


window.localStorage.setItem('palabra_almacenada', 'valor de la palabra');
//lo primero se conoce como clave y el segundo parametro como valor en este caso.
window.localStorage.setItem('lista_amigos', JSON.stringify(amigos));