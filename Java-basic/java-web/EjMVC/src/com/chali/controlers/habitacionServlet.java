package com.chali.controlers;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.chali.database.BBDD;
import com.chali.modelos.Habitacion;

@WebServlet("/habitacion")
public class habitacionServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;


	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String idhabitacion=request.getParameter("hid");
		HttpSession session=request.getSession();
		
		//si existe el dato usuario en sersion ->lo dejo pasar
		//si no lo redirijo a login
		if (session.getAttribute("usuario")!=null) {  //el get tiene que tener el mismo nombre k el set, en este caso usuario
			
			BBDD bbdd=new BBDD();
			
			int idH=Integer.parseInt(idhabitacion);
			
			//Habitacion especial =bbdd.habitaciones.get(0);

			

			request.setAttribute("laHabitacion", bbdd.getHabitacionByHid(idH));

			request.getRequestDispatcher("./habitacion.jsp").forward(request, response);

		}else {
			response.sendRedirect("login");
		}
		
	}
	

	

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
