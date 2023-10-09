package inheritance;

public class Person {
	
//	Challenge
//	Create a parent class called person, they have a property called name that is set in their constructor
//	person has a method called say your name
//	Create a child class called student that inherits from person
//	Create a child class called teacher that inherits from person
//	students have a property called cohort, which is a string
//	When a student says their name, they should also mention which cohort they are in
//	Teachers have a method called call meeting, which takes a person and prints both
//  the teacher and the persons name to the console
//	create a teacher called Aidan and a teacher called Calum
//	create 3 students
//	Put all 5 in an array and make them say their name
//	Make Calum and Aidan have a meeting
//	Make both teachers have a meeting with a student each
	
	
	private String name;
	
	public Person(String name) {
		this.name = name;
	}

	public void sayYourNameMethod() {
		System.out.println(String.format("My name is %s", this.name));
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
	
}
