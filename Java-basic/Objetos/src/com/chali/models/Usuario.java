package com.chali.models;

//no tiene public static void main debido a que es un concepto.
public class Usuario {
	// se hace public para que se pueda acceder destro otra clase.
	public String nombre;
	public String apellido;
	public String email;
	public int edad;

	// si empieza un metodo con un verbo resultara mas facil diferenciarlos
	public String getDatosCompletos() {
		String datos = this.nombre + " " + this.apellido + " " + this.email + " " + this.edad;

		return datos;// el return al principio sera util para que no nos de error desde el principio
					// y poder revisar otros errores
	}

}
