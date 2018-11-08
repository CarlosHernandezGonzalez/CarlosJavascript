package com.chali;

public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int a, b, c;

		a = 12;
		b = 32;
		c = 152;

		if (a > b) {
			if (a > c) {
				System.out.println("a es mayor");
			}else {
				System.out.println("c es mayor");
			}
		} else if (b > a) {
			if (b > c) {
				System.out.println("b es mayor");
			}else {
				System.out.println("c es mayor");
			}
		} else if (a > b) {
			if (a == c) {
				System.out.println("a es igual a c");
			}else {
				System.out.println("c y a son diferentes");
			}
		} else if (b > a) {
			if (b == c) {
				System.out.println("b es igual a c");
			}else {
				System.out.println("c y b son diferentes");
			}
		} else if (c > a) {
			if (c > b) {
				System.out.println("c es mayor");
			}else {
				System.out.println("b es mayor que c");
			}
		} else {
			System.out.println("a es igual a b");

		}

	}

}