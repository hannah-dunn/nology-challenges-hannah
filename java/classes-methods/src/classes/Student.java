package classes;

public class Student {
	
	String firstName = "John";
	String lastName = "Smith";
	String cohort = "Iceland";
	int age = 21;
	boolean isEmployed = false;
	
	// constructor
	// if you don't provide a custom constructor, the class has a default one
	// default constructor would look like this
	
//	public Student()	{}
	
	public Student(String firstName, String lastName, String cohort, int age, boolean isEmployed ) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.cohort = cohort;
		this.isEmployed = isEmployed;
		
	}
	
	// Getters and setters
	
	// GETTERS - 
	
	public String getLastName() {
		return lastName;
	}

	public String getFirstName() {
		return firstName;
	}


	public String getCohort() {
		return cohort;
	}


	public int getAge() {
		return age;
	}


	public boolean isEmployed() {
		return isEmployed;
	}

	// SETTERS
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	}

