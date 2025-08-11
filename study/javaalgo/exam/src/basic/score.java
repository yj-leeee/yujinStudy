package basic;
import java.util.Arrays; 
import java.util.Collections;//내림차순을 위해

public class score {

	public static void main(String[] args) {
		//1. 성적 배열 선언
		Integer[] scores = {88,55,39,100,90,100,98,67};
		
		//오름차순 정렬(꼴등부터 1등까지)
		Arrays.sort(scores);
		
		//향상된 for문을 통해 출력
		for(int i:scores) {
			System.out.print(i + " ");
		}

		System.out.println("===");
		//내림차순 정렬(1등부터 꼴등까지)
		Arrays.sort(scores, Collections.reverseOrder());
		
		//for 문으로 출력
		for(int i=0; i<scores.length; i++) {
			System.out.print(scores[i] + " ");
		}
	}

}
