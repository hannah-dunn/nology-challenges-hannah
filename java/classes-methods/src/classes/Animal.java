package classes;

//Challenge: Class Constructors
//MVP:
//Create a new class called Animal
//It should have a species property (for the name of the animal, e.g cat, dog)
//It should have a name property (for the name of the animal, e.g cat, dog)
//It should have a sound property (for the noise is makes, e.g oink)
//It should default to a cat that meows
//It should have a constructor that sets name and sound based on arguments
//In your main function:
//instantiate a dog that woofs
//... a bear that roars
//print each of their sounds to the console

public class Animal {

//	private String cat;
//	private String meow;
	String species = "cat";
	String name = "kitty";
	String sound = "meow";
	


public Animal(String species, String name, String sound) {
	this.species = species;
	this.name = name;
	this.sound = sound;
}

public static void main(String[] args) {
	
	Animal bear = new Animal("Bear", "Bear", "Roar");
	System.out.println(bear.species);
	System.out.println(bear.name);
	System.out.println(bear.sound);
	
	Animal dog = new Animal("Dog", "Fido", "Woof");
	System.out.println(dog.species);
	System.out.println(dog.name);
	System.out.println(dog.sound);
	
	Animal def = new Animal();
	System.out.println(def.name);
	System.out.println(def.sound);
	System.out.println(def.species);
	
}}
