package inheritance;

public class MyParentClass {

	public float data;
	
	public MyParentClass(float data) {
		this.data = data;
	}
	
	public void parentMethod() {
		System.out.println("Parent method " + data);
	}

}
