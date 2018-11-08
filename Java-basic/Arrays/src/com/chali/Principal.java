package com.chali;

public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String[] meses;
		meses = new String[12];
		meses[0]="enero";
		meses[1]="febrero";
		meses[2]="marzo";
		meses[3]="abril";
		meses[4]="mayo";
		meses[5]="junio";
		meses[6]="julio";
		meses[7]="agosto";
		meses[8]="septiembre";
		meses[9]="octubre";
		meses[10]="noviembre";
		meses[11]="diciembre";
		
		
		for (int i = 0; i < meses.length; i++) {
			System.out.println("el mes "+(i+1)+" es "+meses[i]);
		}
		
		for (String unmes : meses) {
			//para cad auno de los elementos de meses voy a guardarlo en una variable que es unmes en este caso
			//el unmes en este caso va a ser una variable local ya que esta dentro del for.a
			
			System.out.println(unmes);
		}
	}

}
