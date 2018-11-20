package com.AndresBank.BBDD;

import java.util.ArrayList;

public class BBDD {

	private static BBDD instance=null;
	private ArrayList<clientes>;
	private ArrayList<cuentas>;
	private ArrayList<nominas>;
	
	
	public static BBDD getinstance() {
		if(instance==null)
			instance=new BBDD();
		return instance;
	}
	
	private BBDD() {
		this.fillClientes();
		this.fillCuentas();
		this.fillNominas();
	}
	
	
	private boolean fillClientes() {
		
		
		return true
	}
	
	private boolean fillCuentas() {
		return true
				
				
	}
	private boolean fillNominas() {
		
		
		return true
	}
}
