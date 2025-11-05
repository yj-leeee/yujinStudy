package toyproject;

import java.util.Scanner;

public class Player {
	private String choice;
	
	Scanner sc = new Scanner(System.in);
	
	public String choice() {
		String choice;
		while(true) {
			choice = sc.nextLine();
			if(choice.equals("묵")||choice.equals("찌")||choice.equals("빠")) {
				return choice;
			}else {
				System.out.println("묵 찌 빠 중 하나를 입력해주세요");
			}
		}
	}
}
