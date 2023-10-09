package interfaces;

public class Book implements IMedia{

	String title;
	String author;
	int pages;
	
	public Book(String title, String author, int pages) {
		this.title = title;
		this.author = author;
		this.pages = pages;
	}

	@Override
	public String getTitle() {
		return this.title + " by " + this.author;
	}
	
	private int calculateReadTime() {
		return 3 * this.pages;
	}
	
	public String bookInfo() {
		return String.format("It will take you %d minutes to read this book", this.calculateReadTime());
	}
	
	
}
