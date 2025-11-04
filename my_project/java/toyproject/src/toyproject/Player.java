package toyproject;

import java.util.Scanner;

public class Player {
	private String choice;
	
	Scanner sc = new Scanner(System.in);
	
	public String choice() {
		return choice = sc.nextLine();
	}
}
