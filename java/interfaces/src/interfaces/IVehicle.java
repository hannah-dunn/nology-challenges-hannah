package interfaces;

public interface IVehicle {

	// public is default anyway, all interfaces are public
	// interfaces can have fields, but it is very uncommon
	// because all fields in an interface would be static and final
	// final is a bit like const in js
	// aka we cannot update the value
	// an interface will never have a constructor
	// interface = methods
	
	public double getSpeed();
	
	public void decreaseSpeed(double s);
	
}
