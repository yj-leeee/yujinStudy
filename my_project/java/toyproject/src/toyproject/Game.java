package toyproject;

public class Game {
	Player player = new Player();
	Computer computer = new Computer();
	Logic logic = new Logic();
	
	
	public void start() {
		System.out.println("묵찌빠를 시작합니다");
		firstmatch();
		
	}
	//공격자 결정
	public void firstmatch() {
		boolean b = true;
		while(b) {
			System.out.println("가위...바위...보!");
			String p = player.choice();
			String c = computer.choice();
			
			System.out.println("컴퓨터 : " + c + " 나 : " + p);
			
			String result = logic.test(p, c);
			switch(result) {
			case "비김" :
				System.out.println("비겼어요 다시 합니다!");
				continue;
			case "player" :
				System.out.println("플레이어 승");
				b = false;
				playerAttack(p);
				break;
			case "computer" :
				System.out.println("컴퓨터 승");
				b = false;
				comAttack(c);
				break;
			}
		}
	}
	//컴퓨터 공격
	public void comAttack(String c) {
		boolean b1 = true;
		while(b1) {
		System.out.println("나는 뭘 낼까??");
		String p = player.choice();
		System.out.printf("컴퓨터 : %s...%s...", c,c);
		c = computer.choice();
		System.out.print(c+"!!!");
		System.out.println();
		
		String result = logic.test(p, c);
		switch(result) {
		case "비김" :
			System.out.println("컴퓨터 승리!");
			b1=false;
			break;
		case "player" :
			System.out.println("플레이어 공격 전환");
			b1 = false;
			playerAttack(p);
			break;
		case "computer" :
			continue;
			}
		}
	}
	
	//사용자 공격
	public void playerAttack(String p) {
		boolean b1 = true;
		while(b1) {
		System.out.println("나는 뭘 낼까??");
		System.out.printf("나 : %s...%s...", p,p);
		p = player.choice();
		String c = computer.choice();
		System.out.print(p+"!!! 컴퓨터 : " + c);
		System.out.println();
		
		String result = logic.test(p, c);
		switch(result) {
		case "비김" :
			System.out.println("플레이어 승리!");
			b1=false;
			break;
		case "computer" :
			System.out.println("컴퓨터 공격 전환");
			comAttack(p);
			b1 = false;
			break;
		case "player" :
			continue;
			}
		}
	}
}
