<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
<link href="./CSS/styles.css" rel="stylesheet">
</head>
<body>
	<h1>Login</h1>
	<div class="error">${error }</div>
	<form action="" method="POST">
		<div>
			<input type="email" placeholder="email" name="email" id="email"
				required="required" />
		</div>
		<div>
			<input type="password" placeholder="Contraseña" name="password"
				id="password" required="required" />
		</div>
		<div>
			<button>Entrar</button>
		</div>
		<div>
		<img src="./imagenes/meme-teta-corazon.jpg"></div>

	</form>

</body>
</html>