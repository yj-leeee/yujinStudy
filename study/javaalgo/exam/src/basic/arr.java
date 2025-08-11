package basic;

public class arr {

	public static void main(String[] args) {
		//최댓값과 최솟값 찾기 알고리즘
		int[] ar = {1, 13, 15, 17, -2};
		
		int max = ar[0];
		int min = ar[0];
		
		for(int i=0; i<ar.length; i++) {
			if(max < ar[i]) {
				max = ar[i];
			}
		}
		System.out.println("현재 배열 내 가장 큰 값은 : " + max);
		for(int i =0; i<ar.length; i++) {
			if(min > ar[i]) {
				min = ar[i];
			}
		}
		System.out.println("현재 배열 내 가장 작은 값은 : " + min);
	}
	 	
	

}
