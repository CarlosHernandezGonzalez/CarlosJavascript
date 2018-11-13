package com.chali.modelos;
//cuando se acceda al server, no se debe acceder por la vista, osea el jsp, se debe acceder por

//el servlet,porque sino no lo vamos a tener bien, ya que la vista esta asociada al servidor y no al reves

//las propiedades de clase siempre van en minuscula, sino se tendra problemas con el expresion language.

public class Usuario {
	private int id;
	private String nombre;
	private String email;
	private Habitacion hab;

	public Usuario(int id, String nombre, String email, Habitacion hab) {
		this.id = id;
		this.nombre = nombre;
		this.email = email;
		this.hab = hab;
	}

	public int getId() {
		return id;
	}

	public Habitacion getHab() {
		return hab;
	}

	public void setHab(Habitacion Hab) {
		this.hab = Hab;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
