package interfaces;

import java.util.ArrayList;
import java.util.List;

public class Main {
	
	// 1. What are interfaces?
	// A bit like a class (it gathers some requirements about what objects should do)
	// we don't create instances of interfaces (it is not possible)
	
	// With an interface, we list methods we want our classes to have but we don't implement them
	// it is the task of a class to provide implementations of the methods listed in an interface
	
	// Basically like a list of what we want our class to do

	// 2. Why do we need something like this?
	// Interfaces are a mechanism to force a class to have certain methods
	// They are a CONTRACT a class must fulfill
	
	// They allow us to use polymorphism (we can treat an interface as a type)
	// Allow us to ensure that classes that might not seem related have the same methods
	// Classes that implement interfaces can have their own methods too, not just the ones from the interface
	
	// A single class can implement multiple interfaces (multiple inheritance)
	
	// Naming conventions for interfaces
	// 
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Cat cat = new Cat();
		Dog dog = new Dog();
		
		System.out.println(cat.sound());
		System.out.println(dog.sound());
		
		// we can treat interfaces as types (polymorphism)
		MakesSound[] animals = { cat, dog };
		
		for(int i = 0; i < animals.length; i++) {
			System.out.println(animals[i].sound());
		}

		
		Book prideAndPrejudice = new Book("Pride & Prejudice", "Jane Austen", 456);
		
		Book anotherBook = new Book("Red Rising", "Pierce Brown", 382);
		
		String[] actors = { "Leo DiCaprio" };
		
		Movie inception = new Movie(actors, "Inception", "USA");
		
		IMedia[] stuffToDo = { prideAndPrejudice, anotherBook, inception };
		
		for(IMedia thing : stuffToDo ) {
			System.out.println(thing.getTitle());
		}
		
		
//		Challenge: Representing Vehicles with Interfaces
//		MVP
//		Create a Vehicle interface with 2 function signatures
//		getSpeed -> returns the speed in miles/h
//		decreaseSpeed -> decrease speed by s miles/h
//		Create a Bike class
//		Class must store it’s speed in km/h
//		Implement the Vehicle interface
//		Create a Car class
//		Class must store it’s speed in m/s
//		Implement the Vehicle interface
//		Both classes should have constructors that allow you to set the initial speed
//		Both classes must have setters for their attributes

		Car newCar = new Car(30);
//		Bike newBike = new Bike(20);
		
		IVehicle[] howFast = { newCar };
		
		for(IVehicle thing : howFast ) {
			System.out.println(thing.getSpeed());
		}
		
		
		// ArrayList implements List
		// List has superinterfaces
		
		List<String> words = new ArrayList<>();
		
		WithSuperInterfaces thing = new WithSuperInterfaces();
		thing.firstInterfaceMethod();
		thing.secondInterfaceMethod();
		
		
		
//		Challenge: Working with Shapes
//		MVP
//		Create a Area interface with 1 function signature
//		getArea => returns the area of the shape
//		Create another interface called Perimeter with 1 function signature
//		getPerimeter => returns the perimeter of the shape
//		Create 3 classes Circle, Triangle and Rhombus
//		Implement Area and Perimeter for all 

		Circle circle = new Circle(5);
        System.out.println("Circle Area: " + circle.getArea());
        System.out.println("Circle Perimeter: " + circle.getPerimeter());

        Triangle triangle = new Triangle(3, 4, 5);
        System.out.println("Triangle Area: " + triangle.getArea());
        System.out.println("Triangle Perimeter: " + triangle.getPerimeter());

        Rhombus rhombus = new Rhombus(4, 6, 8);
        System.out.println("Rhombus Area: " + rhombus.getArea());
        System.out.println("Rhombus Perimeter: " + rhombus.getPerimeter());
		
        // why doesnt mine work :(
//        Area[] shapes = { circle, triangle, rhombus };
//        for(int i = 0; i < shapes.length; i++) {
//        	shapes[i].getArea();
//        }
		
//		Bonus
//		Create a SurfaceArea interface with 1 function signature
//		getSurfaceArea => returns the surface area of the shape
//		Create a Volume interface with 1 function signature
//		getVolume => returns the volume of the shape
//		Implement SurfaceArea and Volume for the following classes
//		Cube, Sphere, Hexahedron and Cone
		
		
	}
	
	public static void methodForAnimals(MakesSound) {
		System.out.println(object.sound());
	}
	
	// Find out what Abstract Classes are for homework tomorrow morning
	// something in between inheritance and interfaces apparently

}
