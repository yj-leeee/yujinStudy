package grade;

public class VipGrade extends Grade{

	public VipGrade(String id) {
		super(id);
		setGrade("VIP");
        setBonusPoint(0.05);
	}

}
