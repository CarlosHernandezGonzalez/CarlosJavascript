package com.chali.modelos;

public class Habitacion {

	private int hid;
	private String calle;
	private int metros;

	public Habitacion(int hid, String calle, int metros) {
		this.hid = hid;
		this.calle = calle;
		this.metros = metros;
	}

	public int getHid() {
		return hid;
	}

	public void setHid(int hid) {
		this.hid = hid;
	}

	public String getCalle() {
		return calle;
	}

	public void setCalle(String calle) {
		this.calle = calle;
	}

	public int getMetros() {
		return metros;
	}

	public void setMetros(int metros) {
		this.metros = metros;
	}
	
}
