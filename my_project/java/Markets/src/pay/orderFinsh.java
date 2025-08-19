package pay;

public class orderFinsh {
	public static void orderFinsh(){
		System.out.println("===장바구니 목록===");
		int total = 0;
		for(jangba i : jangba.jangbaList) {
			System.out.println(i.objectName + "을(를)" + i.objectStock +"개 담았습니다");
			int eachTotal = i.objectStock * i.objectPrice; //각 물품 합계
			total += eachTotal;
		}
		System.out.println("총 합계 : " + total + "원");
	}
}
