package com.borja.controllers;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.borja.database.BBDD;
import com.borja.models.Usuario;

@WebServlet("/borraruser")
public class borrarUser extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// recoger id de usuario a borrar

		String idusuario = request.getParameter("id");

		int idU = Integer.parseInt(idusuario);

		// borrar de bbdd

		BBDD bbdd = BBDD.getInstance();

		bbdd.getInstance().borrarUsuarioPorId(idU);

		// volver a redirigir a listausuarios
		response.sendRedirect("listausuarios");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}
	
	
}
