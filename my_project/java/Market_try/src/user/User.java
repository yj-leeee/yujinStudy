package user;

import java.util.ArrayList;

import grade.grade;

public class User {
	private String name; //회원 이름
	private String id; //아이디
	private String pass; //비밀번호
	private grade grade;
	
	public User(String name, String id, String pass) {
		this.name = name;
		this.id = id;
		this.pass = pass;
	
	}
	//static으로 선언하여 다른 클래스에서 사용하더라도, 바로 사용할 수 있게 작성
	static ArrayList<User> userList = new ArrayList<>(); //고객 정보 담을 ArrayList
//	userList.add(new User("이름","1","1")); 이렇게 클래스 필드 선언부에 직접 실행문을 쓰면 컴파일 에러가남
	
	//그러니 static 블록안에서 해주기
	static {
		userList.add(new User("이름", "1", "1")); 
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

}
