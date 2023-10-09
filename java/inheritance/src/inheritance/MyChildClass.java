package inheritance;

public class MyChildClass extends MyParentClass {

	public MyChildClass(float data) {
		// super keyword refers to the parent class
		super(data);
	}
	
	public void childMethod() {
		System.out.println("Child method " + this.data);
	}

}
