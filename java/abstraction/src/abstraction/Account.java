package abstraction;

public abstract class Account {

	// that's where I put everything that back account share
	double balance;
	
	public Account(double balance) {
		this.balance = balance;
	}
	
	// interest rate
	abstract double getInterestRate();
	
	// if there is shared logic, i can set it up here
	// do not have to repeat myself
	public double getBalanceAfterYears(int years) {
		// we can call unimplemented methods inside implemented methods
		// we know that each class will be forced to provide the getInterestRate implementation
		for(int i = 1; i <= years; i++) {
			this.balance = this.balance + this.balance * this.getInterestRate();
		}
		return this.balance;
	}
	
	public void printBalance() {
		System.out.println("The balance is " + this.balance);
	}
	
	
	
	
	
}
