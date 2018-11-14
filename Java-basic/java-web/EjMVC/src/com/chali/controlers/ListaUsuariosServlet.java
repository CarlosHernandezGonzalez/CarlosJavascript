package com.chali.controlers;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.chali.database.BBDD;
import com.chali.modelos.Usuario;

@WebServlet("/listausuarios")
public class ListaUsuariosServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		
		HttpSession session=request.getSession();
		
		//si existe el dato usuario en sersion ->lo dejo pasar
		//si no lo redirijo a login
		if (session.getAttribute("usuario")!=null) {  //el get tiene que tener el mismo nombre k el set, en este caso usuario
			BBDD bbdd = new BBDD();// esta llamando al metodo BBDD
			request.setAttribute("losUsuarios", bbdd.usuarios);  
			request.getRequestDispatcher("/listausuarios.jsp").forward(request, response);
		}else {
			response.sendRedirect("login");
		}
		//esto redirigirá a login si es que no se a completado el requisito inicial de completar el usuario y contraseña con los datos correctos.
		
		//se relacionan las cookies, si se borran no guardara la informacion

	}
	// dispatcher, te indica hacia donde te envia la informacion, el forward es el que realmente te envia la informacion.
	//al dispatcher se le pueden asignar mas cosas aparte del forward.

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}