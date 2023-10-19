package abstraction;

public class InStoreOrder extends Order{

	String storeAddress;
	String employeeName;
	
	public InStoreOrder(String[] purchasedProducts, double amountSpent, String storeAddress, String employeeName) {
		super(purchasedProducts, amountSpent);
		this.storeAddress = storeAddress;
		this.employeeName = employeeName;
	}

	@Override
	void checkout() {
		System.out.println("Thank you for visiting our shop");
		
	}

}
