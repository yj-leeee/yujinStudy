package pay;

import java.util.Scanner;

import main.Menu;

public class jangba {
	Scanner sc = new Scanner(System.in);
	
	
	public void jangba() {
		while(true) {
		System.out.println("물품 입력 : ");
		String jangName = sc.nextLine();

		boolean found = false;
		for(int i=0; i<Menu.MenuList.size(); i++) {
			Menu m = Menu.MenuList.get(i);
			if(jangName.equals(m.getThisName())) {
				found = true;
				System.out.println(m.getThisName() + "선택됨");
				break;
			}
		}
		if(! found) {
			System.out.println("잘못 입력하셨습니다");
			
		}
		
		System.out.println("수량 입력 : ");
		int jangStock = sc.nextInt();
		}
	}
}
