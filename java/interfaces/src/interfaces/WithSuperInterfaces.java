package interfaces;

public class WithSuperInterfaces implements SecondInterface {

	@Override
	public void firstInterfaceMethod() {
		System.out.println("From first interface");
		
	}

	@Override
	public void secondInterfaceMethod() {
		System.out.println("From second interface");
	}

	
	
}
