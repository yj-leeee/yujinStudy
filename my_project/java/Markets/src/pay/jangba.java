package pay;

import java.util.ArrayList;

public class jangba {
	String id;
	String objectName;
	int objectPrice;
	int objectStock;
	int totalSum;
	
	jangba(String name, int price, int stock){
		this.objectName = name;
		this.objectPrice = price;
		this.objectStock = stock;
	}
	public static ArrayList<jangba> jangbaList = new ArrayList<>();
	
}
