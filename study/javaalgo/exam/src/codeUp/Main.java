package codeUp;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
	
		float a = sc.nextInt();
		float b = sc.nextInt();
		System.out.printf("%.0f %n", a + b);
		System.out.printf("%.0f %n", a - b);
		System.out.printf("%.0f %n", a * b);
		System.out.printf("%.0f %n", a / b);
		System.out.printf("%.0f %n", a % b);
		System.out.printf("%.2f %n", a / b);
	}

}
