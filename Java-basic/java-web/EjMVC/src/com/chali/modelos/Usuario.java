package com.chali.modelos;

public class Usuario {
	private int id;
	private String nombre;
	private String email;
	private int numb;

	public Usuario(int id, String nombre, String email, int numb) {
		this.id = id;
		this.nombre = nombre;
		this.email = email;
		this.numb = numb;
	}

	public int getId() {
		return id;
	}

	public int getNumb() {
		return numb;
	}

	public void setNumb(int numb) {
		this.numb = numb;
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
