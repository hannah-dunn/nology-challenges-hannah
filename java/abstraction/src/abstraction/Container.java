package abstraction;

//Challenge: How many granules?
//1 Teaspoon of coffee granules is needed for 150mL of water
//Create an abstract Container with 2 functions
//An abstract function getVolume()
//A teaspoonCount() function that uses getVolume() to calculate the teaspoons of coffee granules needed for the volume
//Create three classes LatteGlass, ShotGlass and Mug that extend container, all should implement the getVolume() method

public abstract class Container {

//	double getVolume;
//	
//	public Container(double getVolume) {
//		this.getVolume = getVolume;
//	}
//	
//	int teaspoonCount;
//	
//	public Container(int teaspoonCount) {
//		this.teaspoonCount = teaspoonCount;
//	}
//	
//	abstract double getVolume();
//	
	
	abstract double getVolume();

    int teaspoonCount() {
        double volumeInMl = getVolume();
        int teaspoons = (int) (volumeInMl / 150);
        return teaspoons;
	}
    
    
    
}
