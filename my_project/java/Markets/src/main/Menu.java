package main;

import java.util.ArrayList;

public class Menu {
		String thisName; //이름
		int thisprice; //가격
		int thisStock; //수량
	
		public Menu(String name, int price) {
			this.thisName = name;
			this.thisprice = price;
			this.thisStock = 20;
	}
		static ArrayList<Menu> MenuList = new ArrayList<>();
		
		static {
			MenuList.add(new Menu("멜론", 20000));
			MenuList.add(new Menu("양파", 4000));
			MenuList.add(new Menu("사과", 8000));
		}
		
		public static void MenuInfo() {
			for(int i=0; i<MenuList.size(); i++) {
				Menu m = MenuList.get(i);
				System.out.println("제품명: " + m.thisName + " 가격: " + m.thisprice + " 수량: " + m.thisStock);
			}
		}
	
}
