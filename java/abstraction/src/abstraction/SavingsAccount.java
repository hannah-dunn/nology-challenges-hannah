package abstraction;

public class SavingsAccount extends Account {

	public SavingsAccount(double balance) {
		super(balance);
	}
	
	// we are overriding the abstract methods
	@Override
	double getInterestRate() {
		return 3.5;
	}
	
	// we have the option to override non abstract methods too
	@Override
	public void printBalance() {
		System.out.println("The balance of your savings account is " + this.balance + " AUD");
	}

	
}
