package main;

import java.util.ArrayList;

public class Menu {
		private String thisName; //이름
		private int thisprice; //가격
		private int thisStock; //수량
	
		public Menu(String name, int price) {
			this.setThisName(name);
			this.thisprice = price;
			this.thisStock = 20;
	}
		public static ArrayList<Menu> MenuList = new ArrayList<>();
		
		static {
			MenuList.add(new Menu("멜론", 20000));
			MenuList.add(new Menu("양파", 4000));
			MenuList.add(new Menu("사과", 8000));
		}
		
		public static void MenuInfo() {
			for(int i=0; i<MenuList.size(); i++) {
				Menu m = MenuList.get(i);
				System.out.println("제품명: " + m.getThisName() + " 가격: " + m.thisprice + " 수량: " + m.thisStock);
			}
		}

		public int getThisprice() {
			return thisprice;
		}

		public void setThisprice(int thisprice) {
			this.thisprice = thisprice;
		}

		public int getThisStock() {
			return thisStock;
		}

		public void setThisStock(int thisStock) {
			this.thisStock = thisStock;
		}

		public String getThisName() {
			return thisName;
		}

		public void setThisName(String thisName) {
			this.thisName = thisName;
		}
	
}
