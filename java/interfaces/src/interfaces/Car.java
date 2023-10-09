package interfaces;

public class Car implements IVehicle {

	// stores speed in m/s
	private double speed;
	
	// this is a constructor that takes in speed in m/s
	public Car(double speed) {
		this.speed = speed;
	}
	
	// need to convert m/s to miles/h
	@Override
	public double getSpeed() {
		return this.speed * 2.237;
	}

	// this takes in miles/h as well
	@Override
	public void decreaseSpeed(double s) {
		double newSpeed = this.getSpeed() - s;
		
		// set the speed but in m/s
		this.speed = newSpeed / 2.237;
		
	}


}
