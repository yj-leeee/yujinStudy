package grade;

public class VipGrade extends Grade{

	public VipGrade(String id) {
		super(id);
		super.setGrade("VIP");
        setBonusPoint(0.05);
	}

}
