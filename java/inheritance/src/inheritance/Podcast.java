package inheritance;

public class Podcast extends Track {

	private String[] guests;
	
	public Podcast(float length, String name, String extension,
			String[] guests) {
		super(length, name, extension);
		this.guests = guests;
	}
	
	public void printTrackInfo() {
		System.out.println(String
				.format("The name of the podcast is %s%s and it is %.2f minutes long and the guests are %s",
				this.getName(), this.getExtension(), this.getLength(), this.guests));
	}
	
}
