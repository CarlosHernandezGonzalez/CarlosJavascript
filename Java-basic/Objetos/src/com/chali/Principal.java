package com.chali;

//para camnbiar cosas sobre el propio paquete, hacer click derecho sobre este y darle a refactor y de ahi se escoge la opcion
import com.chali.models.Usuario;

//si quieres llamar a otra clase y pones los primeros caracteres, ctrl+espace y le pinchas, se te creara tambien un import para poder llamarlo
public class Principal {

	public static void main(String[] args) {

		Usuario pepito = new Usuario();// nueva variable que esta siendo un nuevo usuario.
		// generar una instancia es crear un objeto a partir de una definicion

		pepito.nombre = "ramon";
		pepito.apellido = "perez";
		
		//System.out.println(pepito.nombre + " " + pepito.apellido);
		
		System.out.println(pepito.getDatosCompletos());
		// si tiene la clasificacion de privada solo se podra usar dentro de su clase.
		// private permite usar los metodos dentro del mismo package

	}

}
