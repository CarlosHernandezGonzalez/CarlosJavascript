package com.chali.controlers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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

		Usuario pepe = new Usuario(1, "pepe", "pepe@gmail.com", 32);

		request.setAttribute("elUsuario", pepe);

		request.getRequestDispatcher("./usuario.jsp").forward(request, response);

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
