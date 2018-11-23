package com.andresbank.controllers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.andresbank.dao.CuentaDAO;
import com.sun.media.sound.RealTimeSequencerProvider;


public class EliminarServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		if (request.getSession().getAttribute("dni") != null) {

			try {
				String cidrec = request.getParameter("cid");

				int cidInt = Integer.parseInt(cidrec);

				boolean miCuenta = CuentaDAO.getInstance().borrarCuentaPorCid(cidInt);
				if(miCuenta) {
					response.sendRedirect("cuentas");
				}else {
					request.getRequestDispatcher("./error.jsp").forward(request, response);
				}
				
			} catch (Exception e) {
				System.out.println("Exception:" + e.getMessage());
				request.setAttribute("mensaje_error", "Ooops...intentalo más tarde");
				doGet(request, response);
			}
		} else {
			response.sendRedirect("login");
		}
		
	}
	


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		doGet(request, response);
	}

}
