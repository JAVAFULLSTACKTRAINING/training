package com.online.training.exception;

public class ExceptionExample {

	public static void main(String[] args) {
		ExceptionExample example  = new ExceptionExample();
		System.out.println(example.addNubmer(4, 1,"12"));
		//example.addAge("name");
	}
	public int addNubmer(int a,int b,String age) {
		int c=0;
		try {
			 c= a/b;
			 System.out.println("C Value:"+c);
			try {
				 int age1 = Integer.parseInt(age);
				 System.out.println("Age Value:"+age1);
				 try {
					 int age2 = Integer.parseInt(age);
					 System.out.println("Age Value:"+age2);
				 }catch(NumberFormatException exp) {
						System.out.println("Please pass the number");
					}
			}catch(NumberFormatException exp) {
				System.out.println("Please pass the number");
			}
		}catch(ArithmeticException exp) {
			System.out.println("Please send proper input values First values shoule be higher and should be lower...and no zeros");
		}
		catch(Exception exp) {
			exp.printStackTrace();
		}finally {
			System.out.println("Finally block");
		}
		return c;
	}
	
	
	
}
