package user;

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
