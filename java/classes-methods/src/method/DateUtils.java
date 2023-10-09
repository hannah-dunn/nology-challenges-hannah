package method;

//Challenge: Date Formatter
//Create a method that takes a long of “seconds” and returns
//a string in the format “11h02m23s”
//For example, 4000 seconds would be “01h06m40s”
//Test the method by running it from Main

//Challenge: Date Formatter Extension
//Now add another parameter for minutes with the same name (method overloading)
//ideal solution is to call the method that takes seconds inside the method that takes 
//in minutes and seconds

public class DateUtils {

	public static String formatSeconds(long seconds) {
		long hours = seconds / 3600;
		long minutes = (seconds % 3600) / 60;
		long remainingSeconds = seconds % 60;

		return String.format("%02dh%02dm%02ds", hours, minutes, remainingSeconds);
	}

	
	public static String formatSeconds(long seconds, long minutes) {
	    long totalSeconds = seconds + (minutes * 60);
	    return formatSeconds(totalSeconds);
	  }
}
