console.log("Hola!");

//si existe el boton de volverBtn entonces el boton realizara una windows back cuando le pulses
if(document.getElementById('volverBtn')) document.getElementById('volverBtn').onclick=function(){
	window.history.back();
}

$('#enviarBtn').click(function(e){
	e.preventDefault();
	console.log("Validando!!");

	document.querySelectorAll('.error').forEach(elem => {
		elem.classList.add('esconder');
	});

	if(document.getElementById('nuevousuarioform').checkValidity()){
		//enviar;
		document.getElementById('nuevousuarioform').submit(); //el submit permite enviar el formulario
	}else{
		if(!document.getElementById('email').checkValidity()){
			document.getElementById('emailerr').classList.remove('esconder');
		}

		//verificar el resto campos...incuido password coincidente
	}

	

});