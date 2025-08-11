package basic;

public class holjjack {

	public static void main(String[] args) {
		int number = 1;
		
		//반복문 돌면서 홀수인지 체크
		while(number <= 30) {
			if(number%2 != 0) {
				number++;
				continue;
			}
			System.out.print(number + " ");
			number++;
		}

	}

}
