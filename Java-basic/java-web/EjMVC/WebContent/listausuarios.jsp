<%@page import="com.chali.modelos.Usuario"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- tenemos que añadir esto para usar la libreria jstl, core -->

<!DOCTYPE html>
<!-- para que sea un codigo dinamico hay que poner el <% %> -->

<!-- tag lib son tags que nos permiten realizar funciones que no permite el jsp (por ejemplo un for), nosotros vamos a añadir el taglib jstl -->
<!-- para añadir un taglib, por ejemplo jstl, se busca maven jstl, despues de descarga el jar, que es la version comprimida en java
despues de descargar la libreria, copiamos lo descargado(archivo java), entramos en WebContent, WEB-INF, lib y lo copiamos ahi -->

<!-- javapoint es una pagina para poder buscar informacion buena buena XD -->
<html>
<head>
<meta charset="UTF-8">
<title>UUSERS</title>
<link href="./CSS/styles.css" rel="stylesheet">
</head>
<body>
	
	<jsp:include page="./cabecera.jsp"></jsp:include>
	
	<ul>
		${losUsuarios}
		<!-- mostrara el array seguido. -->
		<c:forEach var="unUsuario" items="${losUsuarios}">
			<!-- los items se refieren al array que se quiere recorrer. Se mostrara una lista con el array -->
			<li><a href="./usuario?id=${unUsuario.id}">
					<div>(${unUsuario.id})</div>
					<div>${unUsuario.nombre}</div>
			</a></li>
		</c:forEach>

		<!-- en la referencia debemos añadir el servlet al qeu queramos ir, no a la vista, para ello mirar la direccion web de nuestro servlet, en este caso es /habitacion -->
	</ul>

</body>
</html>