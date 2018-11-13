<%@page import="com.chali.modelos.Usuario"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>


<!DOCTYPE html>
<!-- para que sea un codigo dinamico hay que poner el <% %> -->


<html>
<head>
<meta charset="UTF-8">
<title>USUARIO</title>
<link href="./CSS/styles.css" rel="stylesheet">
</head>
<body>
	<h1>Datos de usuario</h1>
	<ul>
		<li>Id: ${elUsuario.id}</li>
		<li>Nombre: ${elUsuario.nombre}</li>
		<li>Email: ${elUsuario.email}</li>
		<li>Habitacion: <a href="./habitacion"> ${elUsuario.hab.hid}</a></li>
		
		<!-- en la referencia debemos añadir el servlet al qeu queramos ir, no a la vista, para ello mirar la direccion web de nuestro servlet, en este caso es /habitacion -->
	</ul>
</body>
</html>