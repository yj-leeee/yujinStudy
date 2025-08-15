package user;

import java.util.Scanner;

public class login {
	public static void login() {
		Scanner sc = new Scanner(System.in);
		
		
		System.out.println("아이디 입력 : ");
		String id = sc.nextLine();
		System.out.println("비밀번호 입력 : ");
		String pass = sc.nextLine();
		
		//로그인 확인 메서드 호출
		checkUser(id, pass);
	}
	//로그인 확인 메서드
	public static void checkUser(String id, String pass) {
		for(User u : User.userList ) {
			
		}
	}
}