package inheritance;

public class Student extends Person {

	private String cohort;
	
	public Student(String name) {
		super(name);
		this.cohort = cohort;
	}

	public String getCohort() {
		return cohort;
	}

	public void setCohort(String cohort) {
		this.cohort = cohort;
	}
	
	
	
}
