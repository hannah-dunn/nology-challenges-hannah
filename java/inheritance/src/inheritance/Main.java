package inheritance;

public class Main {
	
	// 1. What is inheritance?
	// traits we get from the parents
	
	// we can use it to reduce repetition of our code
	// we can create a parent class and child classes
	// child classes extend the parent class
	// they inherit all the methods and properties from the parent
	// but they can also have their own
	// We can create instances of both parent classes and child classes
	// A parent can have multiple children (
	// 
	// 
	
	// One of pillars of OOP (Object Oriented Programming) 
	// Encapsulation
	// Abstraction
	// Polymorphism

	public static void main(String[] args) {
		
		MyParentClass parent = new MyParentClass(12.0f);
		parent.parentMethod();
	// parent.childMethod(); doesnt work

		
		MyChildClass child = new MyChildClass(14.0f);
		child.childMethod();
		child.parentMethod();
		
		System.out.println(parent.data);
		System.out.println(child.data);
		
		
//		Name: Enough is Enough
//		Artist: Post Malone
//		Album: AUSTIN
//		Genre: Hip Hop
//		Length: 2:45
//		Guests: None
		
		Song songOne = new Song(2.75f, "Enough is Enough", ".mp3","Post Malone", "2010");
		
			songOne.printExtraInfo();
			songOne.printTrackInfo();
			
//		Name: Stalker in the Swamp
//		Creator: Critical Role
//		Season: 2
//		Episode: 21
//		Length: 4:22:00
//		Description: A new ally joins the Mighty Nein as they head deep into the Labenda Swamp to investigate the Gentleman’s mysterious safe house
//		Guests: Mark Hulmes
			
		String [] guests = { "Mark Hulmes" };
		Podcast podcastOne = new Podcast(240.3f, "Stalker in the Swamp", ".mp3", guests);
		
		podcastOne.printTrackInfo();
		
		Track track = new Track(2.0f, "Some cool name", ".mp3");
		
		
		// challenge!!!!!!
		
		Person firstPerson = new Person("Calum");
		firstPerson.sayYourNameMethod();
		
		Teacher teacherMeeting = new Teacher()
		
		}
		
	}

