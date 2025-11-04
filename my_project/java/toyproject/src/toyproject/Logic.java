package toyproject;

public class Logic {
	String[] rsp = {"묵","찌","빠"};
	
	
	public String test(String p, String c) {
		if(p.equals(c)) {
			return "비김";
		}else if(p.equals("묵")&&c.equals("찌") ||
				 p.equals("빠")&&c.endsWith("묵") ||
				 p.equals("찌")&&c.endsWith("빠")
				) {
			return "player";
		}else {
			return "computer";
		}
	}
}
