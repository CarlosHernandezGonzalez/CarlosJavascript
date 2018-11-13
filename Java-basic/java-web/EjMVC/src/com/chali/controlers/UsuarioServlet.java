package com.chali.controlers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.chali.database.BBDD;
import com.chali.modelos.Usuario;

@WebServlet("/usuario") // la arroba indica la anotacion, indica un comportamiento en java, se comporta
						// de diferentes manera de funcion de las anotaciones,indica en este caso cual
						// es la ruta que sigue, que debe ser relativa a la aplicacion y no absoluta.ç
//por cada ruta hay un controlador. No puede haber 2 servlet con la misma ruta

//en el interne, una vexz hemos corrido el Tomcat hay que poner la ruta que sigue el archivo.
public class UsuarioServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String idUsuario=request.getParameter("id");

		System.out.println("ID recibido"+ idUsuario);
		int idU=Integer.parseInt(idUsuario);
		//e usa para transformar un string en un entero
		BBDD bbdd = new BBDD();// esta llamando al metodo BBDD

		request.setAttribute("elUsuario", bbdd.getUsuarioById(idU));
		
		request.getRequestDispatcher("/usuario.jsp").forward(request, response);

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}
//PARA PODER OBTENER UN PROYECTO NUEVO, HAY QUE IMPORTARLO, EN FILE IMPORT BROWSE Y SE AÑADE

	// PARA COMPARTIR COSAS HACER \\192.168.101.172\shared
}
