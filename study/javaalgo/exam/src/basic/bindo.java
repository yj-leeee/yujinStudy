package basic;

public class bindo {

	public static void main(String[] args) {
		//1. 배열선언
		int[] target = {1,3,3,2,1,1,3,0,1,2};
		
		//빈도를 담을 배열 선언
		int[] arr = new int[4]; //target배열의 숫자들 종류만큼
		
		for(int i=0; i<target.length; i++) {
			arr[target[i]]++; 
			//target네 숫자가 arr배열의 인덱스로 적용되어 해당 요소의 값을 1씩 증가
		}
		for(int i=0; i<arr.length; i++) {
			System.out.println(i + " 번째 득표수 : " + arr[i]);
		}

	}

}
