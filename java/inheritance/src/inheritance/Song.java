package inheritance;

public class Song extends Track {
	
		private String artist;
		private String yearReleased;
	
		public Song(float length, String name, String extension, String artist, String yearReleased) {
			super(length, name, extension);
			this.artist = artist;
			this.yearReleased = yearReleased;
		}

		public String getArtist() {
			return artist;
		}

		public void setArtist(String artist) {
			this.artist = artist;
		}

		public String getYearReleased() {
			return yearReleased;
		}

		public void setYearReleased(String yearReleased) {
			this.yearReleased = yearReleased;
		}
		
		public void printExtraInfo() {
			System.out.println(String
					.format("The artist of %s name is %s and it is from %s",
					this.getName(), this.artist, this.yearReleased));
		}
}
