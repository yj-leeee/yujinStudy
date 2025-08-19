package grade;

public class Grade {
	private String id; //아이디
	private String grade; //등급 이름
	private double bonusPoint; //적립비율
	private int point; //현재포인트 금액
	private int sum; //총 구매 금액
	
	public Grade(String id) {
		this.id = id;
		this.grade = "실버";
		this.bonusPoint = 0.01; //float하니까 형변환 해줘야 해서 double로 
		this.point = 0;
		this.sum = 0;
	}
	public void addPurchase(int amount) { //포인트 적립
		this.sum += amount;
		this.point += (int)(amount * bonusPoint);
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public double getBonusPoint() {
		return bonusPoint;
	}
	public void setBonusPoint(double bonusPoint) {
		this.bonusPoint = bonusPoint;
	}
	public int getPoint() {
		return point;
	}
	public void setPoint(int point) {
		this.point = point;
	}
	public int getSum() {
		return sum;
	}
	public void setSum(int sum) {
		this.sum = sum;
	}

}
