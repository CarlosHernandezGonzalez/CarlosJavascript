package com.chali;

import com.chali.models.Direccion;
//para camnbiar cosas sobre el propio paquete, hacer click derecho sobre este y darle a refactor y de ahi se escoge la opcion
import com.chali.models.Usuario;

//si quieres llamar a otra clase y pones los primeros caracteres, ctrl+espace y le pinchas, se te creara tambien un import para poder llamarlo
public class Principal {

	public static void main(String[] args) {

		Usuario pepito = new Usuario();// nueva variable que esta siendo un nuevo usuario.
		// generar una instancia es crear un objeto a partir de una definicion

//		pepito.nombre = "ramon";
//		pepito.apellido = "perez";
//		Direccion aDir = new Direccion();
//		aDir.calle="sese";
//		aDir.ciudad="madrid";
//		aDir.numero=32;
//		
//		pepito.dir=aDir;
		
		//estoy generando una nueva variable habiendo llamado al import del otro paquete la cual tenga calle ciudad y numero definidos en Direccion en la otra clase.
		//luego estoy diciendo que pepito tiene una clase aDir que es la definicio
		
		
		//otra manera de hacerlo es:
		pepito.dir=new Direccion();
		pepito.dir.ciudad="calle";
		pepito.dir.calle="dasd";
		pepito.dir.numero=32;
		
		// System.out.println(pepito.nombre + " " + pepito.apellido);

		System.out.println(pepito.getDatosCompletos());
		// si tiene la clasificacion de privada solo se podra usar dentro de su clase.
		// private permite usar los metodos dentro del mismo package

	}

}
