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
	<jsp:include page="./cabecera.jsp"></jsp:include>
	<h2>Datos de usuario</h2>
	<ul>
		<li>Id: ${elUsuario.id}</li>
		<li>Nombre: ${elUsuario.nombre}</li>
		<li>Email: ${elUsuario.email}</li>
		<li>Habitacion: <a href="./habitacion?hid=${elUsuario.hab.hid}"> ${elUsuario.hab.hid}</a></li>
		
		<!-- en la referencia debemos añadir el servlet al qeu queramos ir, no a la vista, para ello mirar la direccion web de nuestro servlet, en este caso es /habitacion -->
	</ul>
</body>
</html>