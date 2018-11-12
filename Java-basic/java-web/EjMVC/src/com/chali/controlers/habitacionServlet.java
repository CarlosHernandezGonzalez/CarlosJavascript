package com.chali.controlers;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.chali.modelos.Habitacion;



@WebServlet("/habitacion")
public class habitacionServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public habitacionServlet() {
    
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Habitacion especial = new Habitacion(1, "cabalga", 32);

		request.setAttribute("laHabitacion", especial);

		request.getRequestDispatcher("./habitacion.jsp").forward(request, response);
        
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
