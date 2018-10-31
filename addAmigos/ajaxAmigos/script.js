function generarHtml(paramElemid, paramAmigos) {
    $(paramElemid).html(function () {
        let htmlAmigos = '';
        paramAmigos.forEach(unAmigo => {
            htmlAmigos += `<li>
            <div>${unAmigo.name}</div>
            <div>${unAmigo.email}</div>        
            <div><button class="saludaBtn" data-value="${unAmigo.name}">Saludar</button></div>        
            </li>`;
        });

        return htmlAmigos;
    });
}


function asociaClick(paramSelector) {
    $(paramSelector).click(function () {
        alert("Hola " + $(this).attr('data-value') + "!!");
    })
}

$('#cargarbtnFace').click(function () {

    $.ajax({
        url: "http://www.mocky.io/v2/5bd84ad03100002714474d35",
    }).done(function (amigosFromServer) {
        console.log(amigosFromServer);
        //INYECTAR amigosFromServer en el html
        generarHtml('#amigosface', amigosFromServer);

        // Asociar eventos
        asociaClick('#amigosface .saludaBtn');
    });

});

$('#cargarbtnSpoty').click(function () {

    $.ajax({
        url: "http://www.mocky.io/v2/5bd84ad03100002714474d35",
    }).done(function (amigosFromServer) {
        console.log(amigosFromServer);
        //INYECTAR amigosFromServer en el html
        generarHtml('#amigosspoty', amigosFromServer);

        // Asociar eventos
        asociaClick('#amigosspoty .saludaBtn');

    });

});


document.getElementById('acceder').onclick = (function (evt) {
    // console.log(evt);
    evt.preventDefault();
    document.querySelectorAll('.error').forEach(elem => {
        elem.classList.add('esconder');
    });

        let formValid = document.getElementById('login').checkValidity();
        if (formValid) {
            //enviar
            $.ajax({
                method: "POST",
                url: ' http://www.mocky.io/v2/5bd976092f00000e0006d146',//cas0o true
                // url: ' http://www.mocky.io/v2/5bd9779e2f00004f0006d154',//caso false
                data: {
                    username: document.getElementById('username').value, password: document.getElementById('password').value
                }
            }).done(function (data) {
                console.log(data);
                if (data.result) {
                    window.location.href = 'dashboard.html';
                } else {
                    //mensaje de error
                    document.getElementById('mensaje').classList.remove('esconder');
                }
            });
        } else {
            //mostrar mensaje y no enviar

            // document.getElementById('mensaje').innerHTML = 'datos incorrectos';
            // document.querySelectorAll('.error').forEach(elem => {
            //     elem.classList.add('esconder');



            if (!document.getElementById('username').checkValidity()) {
                document.getElementById('errorusername').classList.remove('esconder');
            }
            if (!document.getElementById('password').checkValidity()) {
                document.getElementById('errorpassword').classList.remove('esconder');
            }
        }
    });

//cuando damos al inner.HTML podemos introducir la variable dentro, pero cuando usamos el class list es para añadir algo al parametro dela funcion.

$('#acceder').click(function () {

    $.ajax({
        url: "http://www.mocky.io/v2/5bd84ad03100002714474d35",
    }).done(function (amigosFromServer) {
        console.log(amigosFromServer);
        //INYECTAR amigosFromServer en el html
        generarHtml('#login', amigosFromServer);

        // Asociar eventos
        asociaClick('#login .saludaBtn');

    });

});