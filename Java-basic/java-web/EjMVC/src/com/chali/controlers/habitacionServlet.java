package com.chali.controlers;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.chali.database.BBDD;
import com.chali.modelos.Habitacion;

@WebServlet("/habitacion")
public class habitacionServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;


	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		BBDD bbdd=new BBDD();
		
		Habitacion especial =bbdd.habitaciones.get(0);

		

		request.setAttribute("laHabitacion", especial);

		request.getRequestDispatcher("./habitacion.jsp").forward(request, response);

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}