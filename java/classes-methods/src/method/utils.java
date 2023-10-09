package method;

public class utils {

	// Method to extract the first name from a full name
    public static String firstName(String fullName) {
        // Split the full name into parts using space as the delimiter
        String[] nameParts = fullName.split(" ");

        // The first part (index 0) is the first name
        return nameParts[0];
    }

}

public static String firstName(String fullName) {
	  return fullName.split(" ")[0];
	 }
