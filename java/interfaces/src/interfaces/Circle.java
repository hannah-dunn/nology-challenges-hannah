package interfaces;

public class Circle implements IArea, IPerimeter {

	private double radius; 
	
	//constructor
	public Circle(double radius) {
		this.radius = radius;
	}
	
	
	@Override
	public double getPerimeter() {
		return 2 * Math.PI * radius;
	}

	@Override
	public double getArea() {
		return Math.PI * radius * radius;
	}

}
