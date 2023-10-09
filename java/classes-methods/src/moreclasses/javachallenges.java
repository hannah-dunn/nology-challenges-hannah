package moreclasses;

import method.findArea;
import method.fullName;

public class javachallenges {

	public static void main(String[] args) {
		//Challenge: Find Area Method
		//MVP:
		//Create method called findArea
		//It should take in a single parameter
		//radius (of the circle)
		//It should return the area of the circle
		
		System.out.println(findArea.area(4));

		//Challenge: Fullname Method
		//MVP:
		//Create a method called fullName,
		//It should take in 2 parameters:
		//firstName
		//lastName
		//It should return a full name
		
		System.out.println(fullName(Hannah, Dunn));
		
		//Challenge: Firstname Method
		//MVP:
		//Create a method called firstName,
		//It should take in 1 parameter:
		//fullName
		//It should return a first name
		
		
		//Challenge: Date Formatter
		//Create a method that takes a long of “seconds” and returns
		//a string in the format “11h02m23s”
		//For example, 4000 seconds would be “01h06m40s”
		//Test the method by running it from Main
		//Challenge: Date Formatter Extension
		//Now add another parameter for minutes with the same name (method overloading)
		//ideal solution is to call the method that takes seconds inside the method that takes 
		//in minutes and seconds


	}

}
