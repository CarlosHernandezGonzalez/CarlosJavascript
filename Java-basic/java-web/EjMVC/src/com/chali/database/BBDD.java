package com.chali.database;

import java.util.ArrayList;

import com.chali.modelos.Habitacion;
import com.chali.modelos.Usuario;

//estamos simulando una base de datos

public class BBDD {

	public ArrayList<Usuario> usuarios = new ArrayList<Usuario>();
	public ArrayList<Habitacion> habitaciones = new ArrayList<Habitacion>();
	// el constructor siempre se pone despues de las propiedades

	public BBDD() { // estamos usando los metodos para hacer efectivo los modelos
		this.fillHabitaciones();
		this.fillUsuarios();

		this.relacionarUserHab();
	}

	private boolean fillUsuarios() {
		usuarios.add(new Usuario(1, "pepe", "a@p.es", null, "ppp"));
		usuarios.add(new Usuario(2, "paco", "b@p.es", null, "aaa"));
		usuarios.add(new Usuario(3, "yeah", "c@p.es", null, "ccc"));

		return true;

	}

	private boolean fillHabitaciones() {
		habitaciones.add(new Habitacion(12, "banana 2", 40));
		habitaciones.add(new Habitacion(122, "bananana 2", 50));
		habitaciones.add(new Habitacion(1222, "banananana 2", 60));

		return true;
	}

	private boolean relacionarUserHab() {
		usuarios.get(0).setHab(habitaciones.get(1));// lo que hay entree los parentesis son las posiciones
		usuarios.get(1).setHab(habitaciones.get(0));// dentro de los arrays, tanto de los usuarios como las
		usuarios.get(2).setHab(habitaciones.get(2));// habitaciones

		return true;
	}

	// Metodo que en funcion del id me devuelve un objeto usuario concreto
	// si no existe devuelve null.
	public Usuario getUsuarioById(int id) {
		Usuario usuarioADevolver = null;

		// iteramos por cada usuario y comparamos su id con el que nos indican

		for (Usuario unUsuario : usuarios) {
			if (unUsuario.getId() == id) {
				usuarioADevolver = unUsuario;
				break; // si encontramos el usuario rompemos el bucle.
			}
		}

		return usuarioADevolver;

	}
	public Habitacion getHabitacionByHid(int hid) {
		Habitacion habitacionADevolver = null;


		for (Habitacion unaHabitacion : habitaciones) {
			if (unaHabitacion.getHid() == hid) {
				habitacionADevolver = unaHabitacion;
				break;
			}
		}

		return habitacionADevolver;

	}

	public boolean existeUsuarioPorEmailYPass(String emailrec, String pass) {
		boolean existeUsuario=false;
		for (Usuario daleUser : this.usuarios) {
			if(daleUser.getEmail().equals(emailrec) && daleUser.getPass().equals(pass) ) {
				
				existeUsuario= true;
				break;
			}
		}
		
		return existeUsuario;
		
		
	}

}

