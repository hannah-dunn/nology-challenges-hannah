package abstraction;

public class OnlineOrder extends Order {

	String address;
	String customerName;
	double discountPercent;
	
	public OnlineOrder(String[] purchasedProducts, double amountSpent, String address, String customerName, double discountPercent) {
		super(purchasedProducts, amountSpent);
		this.address = address;
		this.customerName = customerName;
		this.discountPercent = discountPercent;
		
	}
	
	@Override
	void checkout() {
		System.out.println("Thanks for your online order");
	}
	
	void applyDiscount() {
		this.amountSpent -= this.amountSpent * (this.discountPercent / 100);
		
	}

}
