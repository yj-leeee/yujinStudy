package grade;

public class grade {
	private String id; //아이디
	private String grade; //등급 이름
	private double bonusPoint; //적립비율
	private int point; //현재포인트 금액
	private int sum; //총 구매 금액
	
	public grade(String id) {
		this.id = id;
		this.grade = "실버";
		this.bonusPoint = 0.01; //float하니까 형변환 해줘야 해서 double로 
		this.point = 0;
		this.sum = 0;
	}
	

}
