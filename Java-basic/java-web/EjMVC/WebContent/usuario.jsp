<%@page import="com.chali.modelos.Usuario"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"

	pageEncoding="UTF-8"%>
	
	 <%
	Usuario elUsuario=  (Usuario)request.getAttribute("elUsuario");
	%>
	
<!DOCTYPE html>
 <!-- para que sea un codigo dinamico hay que poner el <% %> -->


<html>
<head>
<meta charset="UTF-8">
<title>USUARIO</title>
</head>
<body>
	<h1>Datos de usuario</h1>
	<ul>
		<li>Id: ${elUsuario.id}</li>
		<li>Nombre: ${elUsuario.nombre}</li>
		<li>Email: ${elUsuario.email}</li>
		<li><a href="./habitacion.jsp" >numero: ${elUsuario.numb }</a> </li>
	</ul>
</body>
</html>