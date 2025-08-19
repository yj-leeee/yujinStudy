package pay;

import java.util.Scanner;

import main.Menu;

public class order {

	public static void order() {
		Scanner sc = new Scanner(System.in);
		while(true) {
			System.out.println("물품 입력 : ");
			String jangName = sc.nextLine();

			boolean found = false; //물품 이름 체크
			boolean stockOk = false; //수량 체크
			
			for(int i=0; i<Menu.MenuList.size(); i++) {
				Menu m = Menu.MenuList.get(i);
				
				if(jangName.equals(m.getThisName())) {
					found = true;
					System.out.println(m.getThisName() + "선택됨");
					while(true) { //수량입력 반복
					System.out.println(m.getThisName() +" 수량 선택 : ");
					
					int jangStock = sc.nextInt();
					sc.nextLine();//버퍼비우기
					
					if(jangStock<=m.getThisStock()) {
						System.out.println(m.getThisName()+"을 "+m.getThisStock()+"개 선택하셨습니다.");
						stockOk = true;
						break;
					}else {
						System.out.println("그만큼의 수량이 없습니다.");
					
					}
					
					}
					break;
				}
			}
			
			if(! found) {
				System.out.println("물품을 잘못 입력하셨습니다");
			}
		}
	}
}


