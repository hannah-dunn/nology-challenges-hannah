package interfaces;

public class Movie implements IMedia{

	String[] actors;
	String title;
	String country;
	
	public Movie(String[] actors, String title, String country) {
		this.actors = actors;
		this.title = title;
		this.country = country;
	}
	
	@Override
	public String getTitle() {
		return this.title;
	}
	
	public void getMovieInfo() {
		System.out.println("This movie is from " + this.country);
	}

	
	
}
