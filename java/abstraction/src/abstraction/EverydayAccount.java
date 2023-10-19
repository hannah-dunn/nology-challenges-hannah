package abstraction;

public class EverydayAccount extends Account {

	public EverydayAccount(double balance) {
		super(balance);
	}
	
	@Override
	double getInterestRate() {
		return 0.01;
	}
	
	
	

}
