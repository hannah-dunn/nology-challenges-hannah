package inheritance;

public class Track {
	
	private float  length;
	private String name;
	private String extension;
	
	public Track(float length, String name, String extension) {
		// we are using the setter here because we have some extra validation for length
		this.setLength(length);
		this.length = length;
		this.name = name;
		this.extension = extension;
	}
	
	public float getLength() {
		return this.length;
	}
	
	public void setLength(float length) {
		if(length < 0) {
			this.length = 0;
			return;
		}
		this.length = length;
	}
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		// grab the first character and convert to upper case
		this.name = name;
	}
	
	public String getExtension() {
		return this.extension;
	}
	
	// .mp3
	public void setExtention(String extension) {
		this.extension = extension;
	}
	
	public void printTrackInfo() {
		System.out.println(String.format("The name of the track is %s%s and it is %.2f minutes long",
				this.name, this.extension, this.length));
	}
	
}
