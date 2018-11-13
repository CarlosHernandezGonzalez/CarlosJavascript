<%@page import="com.chali.modelos.Habitacion"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="./CSS/styles.css" rel="stylesheet">
</head>
<body>
	<h1>Datos de Habitacion</h1>
	<ul>
		<li>Id: ${laHabitacion.hid }</li>
		<li>Calle: ${laHabitacion.calle }</li>
		<li>Metros_cuadrados: ${laHabitacion.metros }</li>
		
		
	</ul>
</body>
</html>