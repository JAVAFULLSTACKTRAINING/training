package com.online.training.exception;

public class ExceptionProgTwo {

	public void addTwoNumbers(int a,int b) {
		ExceptionProgTwo two = new ExceptionProgTwo();
		two.addSubTwoNumber(a,b);
	}
	private void addSubTwoNumber(int a,int b) {
		ExceptionProgThree three = new ExceptionProgThree();
		three.addNumber(a, b);
	}
	
}
