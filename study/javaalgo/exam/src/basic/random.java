package basic;
import java.util.Random;

public class random {
	//랜덤을 정수10개의 값을 갖는 배열을 만들어 최댓값과 최솟값을 같이 출력하기
	
	public static void main(String[] args) {
		int[] ran = new int[10]; //배열선언
	
		//배열값 초기화
	for(int i=0; i<ran.length; i++) {
		ran[i] = (int)(Math.random()*10); //정수형으로 바꿔주고 곱하기10
		}
	
	int max = ran[0];
	int min = ran[0];
	for(int i=0; i<ran.length; i++) {
		if(max <ran[i]) {
			max = ran[i];
		}//
		if(min > ran[i]) {
			min = ran[i];
		}
	}
	System.out.println("최댓값은 : " + max + "최소값은 : " + min);
	}
}
