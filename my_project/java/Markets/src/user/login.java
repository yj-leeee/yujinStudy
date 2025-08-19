package user;

import java.util.Scanner;

public class login {
	public static void login() {
		boolean ss = true;
		while(ss) {
		Scanner sc = new Scanner(System.in);
		System.out.println("아이디 입력 : ");
		String id = sc.nextLine();
		System.out.println("비밀번호 입력 : ");
		String pass = sc.nextLine();
		
		boolean loginSuccess = false; //로그인 성공 여부 체크
		for(int i=0; i<User.userList.size(); i++) {
			User u = User.userList.get(i);
			if(u.getId().equals(id) && u.getPass().equals(pass)) {
				System.out.println(u.getName()+"님 로그인 성공");
				loginSuccess = true;
				break; //로그인 성공했으니 for문 종료
			}
		}
		if(loginSuccess) {
			break; //while문 종료->로그인 완료
		}else {
			System.out.println("아이디 혹은 비밀번호가 잘못되었습니다");
		}
		
		}
	}
	
	
}
