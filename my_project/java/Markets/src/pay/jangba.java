package pay;

import java.util.Scanner;

import main.Menu;

public class jangba {
	String id;
	String objectName;
	int objectPrice;
	int objectStock;
	int totalSum;
	
	jangba(String id, String name, int price, int stock){
		this.id =id;
		this.objectName = name;
		this.objectPrice = price;
		this.objectStock = stock;
		this.totalSum = 0;
	}
	
}
