package inheritance;

public class Teacher extends Person{
	
	private String teacher;
	
	public Teacher(String name) {
		super(name);
		this.teacher = teacher;
	}
	
	public String getTeacher() {
		return teacher;
	}

	public void setTeacher(String teacher) {
		this.teacher = teacher;
	}


	public void meetingMethod() {
		System.out.println(String
				.format("%s has called a meeting with %s", this.teacher, this.getName()));
	}

}
