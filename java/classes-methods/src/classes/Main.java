package classes;

import java.sql.Date;

public class Main {
	
		// What are classes?
		// OOP applications
		// Object-Oriented Programming
		// We don't base our apps around functions, but objects that interact with each other
		// To create an object I need a class - a blueprint for an object, it defines what 			// properties the object should have, and what the object should do (methods)


	public static void main(String[] args) {
		
//		Date today = new Date();
		
		// create an object of type Student
		
		Student john = new Student("Kate", "Jones", "Samoa", 31, false);
		System.out.println(john.age);
		System.out.println(john.cohort);
		System.out.println(john.firstName);
		System.out.println(john.lastName);
		System.out.println(john.isEmployed);
		

		Student john2 = new Student("Jack", "Doe", "Japan", 35, true);
		System.out.println(john2.age);
		System.out.println(john2.cohort);
		System.out.println(john2.firstName);
		System.out.println(john2.lastName);
		System.out.println(john2.isEmployed);
		
	}

}
