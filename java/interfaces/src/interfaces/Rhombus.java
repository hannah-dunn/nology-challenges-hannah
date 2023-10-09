package interfaces;

public class Rhombus implements IArea, IPerimeter {
	
	
	private double side, x, y;
	
	public Rhombus(double side, double x, double y) {
		this.side = side;
		this.x = x;
		this.y = y;
	}
	

	@Override
	public double getPerimeter() {
		return this.side * 4;
	}

	@Override
	public double getArea() {
		return (this.x * this.y) / 2;
	}

}
