package main;

import java.util.Scanner;

import user.login;
import user.newUser;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		boolean tt = true;
		while (tt) {// 항상 참인 조건으로 반복->무한 루프 생성
			// 1. 처음 창, 로그인 or 회원가입
			System.out.println("환영합니다\n1.로그인하기 :\n2.회원가입하기 :");
			int First = sc.nextInt(); // 로그인할건지 회원가입할건지

			switch (First) {
			case 1:
				login.login();
				Menu.Menu();
				return;
			case 2:
				newUser.newUser();
				break;
			default:
				System.out.println("다시 입력해주세요");
				break;
			}
			System.out.println("즐거운 하루보내세요");
			
		}

	}
}
