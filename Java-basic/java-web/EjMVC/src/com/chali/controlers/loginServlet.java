package com.chali.controlers;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.chali.database.BBDD;

@WebServlet("/login")
public class loginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.getRequestDispatcher("/login.jsp").forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String emailrec = request.getParameter("email");

		String pass = request.getParameter("password"); // el parametro se llama igual que el name del input

		System.out.println("Estoy en el POST!!");
		System.out.println("Email" + emailrec);
		System.out.println("dale al pass" + pass);
		
		BBDD bd=new BBDD();

		// decidir si existe usuario con nese email y password...entrar en listausuarios
		// si no... volver a mostrar formulario.
		
		boolean existeUser= bd.existeUsuarioPorEmailYPass(emailrec,pass);
		
		HttpSession session= request.getSession();

		if (existeUser) {// el equals permite comprobar que un string es igual a
																// otro
			// llevarlo a lista de usuarios
			//request.getRequestDispatcher("/listausuarios").forward(request, response); 
			//lo de arriba es una manera de hacerlo, pero no es util para el suario, la direccion no da informacion
			session.setAttribute("usuario", emailrec);
			response.sendRedirect("listausuarios");
			//esto es para que el usuario vea que ha entrado.

		} else {
			// devolverlo a login
			request.setAttribute("error", "usuario y contraseña no existe");
			this.doGet(request, response);
		}
		

		
		
		//el get devuelve informacion y el post la envia, sobretodo se utiliza para recibir informacion del servidor en formularios
		

	}

}
