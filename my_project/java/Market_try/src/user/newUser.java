package user;

import java.util.Scanner;




public class newUser {
	public static Object name;

	public static void newUser() {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("이름 입력: ");
		String name = sc.nextLine();
		System.out.println("아이디 입력: ");
		String id = sc.nextLine();
		System.out.println("비밀번호 입력: ");
		String pass = sc.nextLine();
		
		System.out.printf("회원가입을 환영합니다 %s 님", name);
		
		User.userList.add(new User(name, id, pass)); //변수 없이 바로 생성한 객체 넣기
		
	}
	
}
