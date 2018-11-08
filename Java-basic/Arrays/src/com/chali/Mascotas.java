package com.chali;

//los import siempre van antes de la clase
import java.util.Random;


public class Mascotas {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String[] mascotas;
		mascotas = new String[1000];

		//llenar el array
		for (int i = 0; i < mascotas.length; i++) {
			//mascotas[i] = "mascota" + (i + 1);
			mascotas[i] = generarNombre(); //hemos llamado al metodo, por lo que estamos generando nombres aleat
		}
		//escupir el array
		for (String unamascota : mascotas) {
			System.out.println(unamascota);
		}
		
	
		
	}//fin del main

	
	//generar un metodo en el cual de manera aleatoria ponga 20 nombres diferentes
	
	public static String generarNombre() {
		String[] nombresSueltos=new String[20];
		nombresSueltos[0]="max";
		nombresSueltos[1]="zar";
		nombresSueltos[2]="papi";
		nombresSueltos[3]="godzilla";
		nombresSueltos[4]="cabron";
		nombresSueltos[5]="aleluya";
		nombresSueltos[6]="mis";
		nombresSueltos[7]="mos";
		nombresSueltos[8]="mus";
		nombresSueltos[9]="ana";
		nombresSueltos[10]="corre";
		nombresSueltos[11]="chema";
		nombresSueltos[12]="dale";
		nombresSueltos[13]="duro";
		nombresSueltos[14]="mandanga";
		nombresSueltos[15]="papi";
		nombresSueltos[16]="petos";
		nombresSueltos[17]="generar";
		nombresSueltos[18]="mayor";
		nombresSueltos[19]="capitan";
		
		Random rand = new Random();

		int  n1 = rand.nextInt(20);
		int  n2 = rand.nextInt(20);
		//20 is the maximum and the 0 is our minimum 

		String NombresDevolver=nombresSueltos[n1]+" "+nombresSueltos[n2];
		
		
		return NombresDevolver; //se necesita añadir un return coin un sstring ya que le hemos dado ese tipo
		//necesito indicar el tipo de metodo que quiero devolver, si lo dejo en vacio no haria return
		//el  nombre con el tipo y el return es clave, con el void no es necesario el return.
		//necesito ahcer un import para poder crear obetos especificos.
		
		//sin el tipo, por ejemplo un void no devolvera nada y por lo tanto no servira llamarlo
		
		//un metodo es una especia de funcion DENTRO de una clase.
		
		//en java no existen funciones sueltas, esta todo orientado a objetos.
	}
}
