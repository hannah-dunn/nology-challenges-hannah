package abstraction;

public class LatteGlass extends Container {

	double radius;
	double height;
	
	public LatteGlass(double radius, double height) {
		this.radius = radius;
		this.height = height;
	}
	
	
	@Override
	double getVolume() {
		return Math.PI * Math.pow(radius, 2) * height;
	}

	
	
}
