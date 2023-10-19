package abstraction;

//Challenge: Phone
//Create an abstract class named Phone
//the Phone class should have a phone number property
//the Phone class should have a method named call that takes a single parameter of another phone object and logs that phones number
//create a class named Landline that inherits from Phone and has an address property
//create a class named Mobile that inherits from Phone and has a method called text that takes 
//another Mobile as well as a string and logs the number as well as the message


public abstract class Phone {

	int phoneNumber;
	
	public Phone(int phoneNumber) {
		this.phoneNumber = phoneNumber;

	}

	public void Call() {
		for(String num : this.phoneNumber) {
			System.out.println(num);
		}
	}
	
	
	
}
