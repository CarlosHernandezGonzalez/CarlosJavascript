package com.chali;

//para todas las clases necesitamos indicar ucal es la ruta de acceso de la propia clase.
public class HelloPrincipal {

	// class es la palabra reservada para decir que es una clase, con public estamos
	// indicando que es accesible desde cualqiuer parte del programa

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// el void significa que no devuelve nada y que es estatico. Es un metodo dentro
		// de la clase.

		// en java se tiene que decir que es main.
		// se necesita decir que la variable que se cree tiene un tipo concreto, un
		// texto,numero..., el tipo siempre va antes que la variable.
		// con esto se permite una gestion de la memoria mejor.
		// ppara forzar el intelicense despues de escribir unas letras se pulsa el ctrl
		// espace para poder abrir las opciones posibles. Ejemplo: str ctrl espace

		
		//ctrl+alt+f te pone el texto en orden
		String texto;
		texto = "hola ";

		System.out.println(texto);

		String otro;
		otro = "Carlos ";

		int edad;
		edad = 22;

		double coste = 23.4;
		float coste2 = 44.54f;

		// el double se usa para los decimales y el float tambien, pero hay que ponerle
		// una f al final
		// los double ocupan menos que los float

		System.out.println(texto + otro + "tienes " + edad);

		System.out.println(coste);
	}

}
