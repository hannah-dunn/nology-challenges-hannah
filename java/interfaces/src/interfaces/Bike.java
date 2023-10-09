package interfaces;

public class Bike implements IVehicle {

	private double speed;
	
	// here we take km/h as the parameter
	public Bike(double speed) {
		this.speed = speed;
	}
	
	// return the speed miles/h
	// this is a method lines 14 to 21 i think
	@Override
	public double getSpeed() {
		return this.speed / 1.609;
	}
	
	public void setSpeed(double speed) {
		this.speed = speed;
	}

	// takes in miles/h
	// this is a method too
	@Override
	public void decreaseSpeed(double s) {
		// subtract from the current speed
		double newSpeed = this.getSpeed() - s;
		
		// set the speed field to the value
		// newSpeed is in miles per hour, we need to convert it back to km/h
		this.speed = newSpeed * 1.609;
		
		
	}

}
