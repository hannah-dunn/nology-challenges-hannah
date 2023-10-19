package abstraction;



	// Abstract classes
	// 

public class Main {

	public static void main(String[] args) {
		
		EverydayAccount dailyAccount = new EverydayAccount(100.0);
		
		// this is the abstract method implemented by the child class
		dailyAccount.getInterestRate();
		System.out.println(dailyAccount.getInterestRate());
		
		System.out.println(dailyAccount.getBalanceAfterYears(2));
		
		dailyAccount.printBalance();
		
		SavingsAccount savings = new SavingsAccount(10000.0);
		savings.printBalance();
		
		// this doesn't work
		// can't use an abstract class to create classes from it
//		Account genericAcount = new Account(100.0);
		
		
		// Challenge: How many granules?
		
									// radius, height
		LatteGlass latte = new LatteGlass(6, 10);
		int latteTeaspoons = latte.teaspoonCount();
        System.out.println("Teaspoons of coffee granules needed for you Latte Glass: " + latteTeaspoons);
		
        ShotGlass shot = new ShotGlass(5, 5);
		int shotTeaspoons = shot.teaspoonCount();
        System.out.println("Teaspoons of coffee granules needed for you Shot Glass: " + shotTeaspoons);
		
        Mug mug = new Mug(10, 10);
		int mugTeaspoons = mug.teaspoonCount();
        System.out.println("Teaspoons of coffee granules needed for your Mug: " + mugTeaspoons);
		
		
        // Challenge: Phone
        
        
		
	}

}
