package com.online.training.exception;

public class ExceptionProgOne {

	public static void main(String[] args) {
		ExceptionProgOne one = new ExceptionProgOne();
			one.addNumbers(30,0);
	}
	
	public void addNumbers(int a,int b) {
		ExceptionProgTwo two = new ExceptionProgTwo();
		two.addTwoNumbers(a, b);
	}

}
