package toyproject;

public class Computer {
	Logic logic = new Logic();
	String choice;
	
	public String choice() {
		int random = (int)(Math.random()*3);
		choice = logic.rsp[random];
		return choice;
	}

}
