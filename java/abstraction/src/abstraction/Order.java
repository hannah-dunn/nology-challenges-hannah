package abstraction;

import java.util.Date;

public abstract class Order {

	// in real life, you would have a class that represents a Product, a class for each type of product
	String[] purchasedProducts;
	Date timeOfPurchase;
	double amountSpent;
	
	public Order(String[] purchasedProducts, double amountSpent) {
		this.purchasedProducts = purchasedProducts;
		this.timeOfPurchase = new Date();
	}
	
	public void printProducts() {
		for(String product : this.purchasedProducts) {
			System.out.println(product);
		}
	}
	
	public double calculateTotal() {
		return this.amountSpent;
	}
	
	// we can have abstract classes without abstract methods
	abstract void checkout();
	
}

