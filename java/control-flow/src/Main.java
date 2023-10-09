import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
	
		byte age = 18;
		age = 12;
		
		if(age >= 18) {
			System.out.println("You can drive a car");
		} else if (age >= 11) {
			System.out.println("You can ride a bike");
		} else {
			System.out.println("You are too young");
		}

		String country = "Aus";
		
		if("Aus".equals(country)) {
			System.out.println("You can speak English");
		}
		
		// Switch statement
		
		char command = 'e';
		switch(command) {
		case 'c':
			System.out.println("Continue running...");
			break;
		case 'e':
		case 'E':
			System.out.println("Exit...");
			break;
		default:
			System.out.println("Invalid command");
		}
		
//		Challenge: Positive or Negative?
//				Scan user input and print...
//				"n is positive" if n (the number that was scanned) is positive
//				"n is negative" if n is negative
		
		Scanner s = new Scanner(System.in);
		System.out.println("Please enter an integer");
		int fromUser = s.nextInt();
		if (fromUser >= 0) {
			System.out.println("n is postive");
		} else {
			System.out.println("n is negative");
		} 
		
//		Laura's Answer		
//		Scanner s = new Scanner(System.in);
//		  System.out.println("Please enter a number");
//		  int numberFromUser = s.nextInt();
//		  
//		      if(numberFromUser >= 0) {
//		   
//		   System.out.println(numberFromUser + " is positive");
//		  }
//		  else {
//		   System.out.println(numberFromUser + " is negative");
//		  }
//		
		
//		Challenge: Find the largest input
//				Get 3 numbers from the user
//				Print "n is the largest", n being the largest of the 3 inputs
		
		System.out.println("Please enter 3 intergers");
		int oneUserNum = s.nextInt();
		int twoUserNum = s.nextInt();
		int threeUserNum = s.nextInt();
//		System.out.println(oneUserNum);
		if(oneUserNum > twoUserNum && threeUserNum) {
			System.out.println(oneUserNum + " is the largest");
		} else if (twoUserNum > threeUserNum && oneUserNum) {
			System.out.println(twoUserNum + " is the largest");
		} else if (threeUserNum > oneUserNum && twoUserNum) {
			System.out.println(threeUserNum + " is the largest");
		}
		
		
		Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first number: ");
        int num1 = scanner.nextInt();

        System.out.print("Enter the second number: ");
        int num2 = scanner.nextInt();

        System.out.print("Enter the third number: ");
        int num3 = scanner.nextInt();

        int largest = num1;
        if (num2 > largest) {
            largest = num2;
        }
        if (num3 > largest) {
            largest = num3;
        }

        System.out.println(largest + " is the largest.");
		
		
//		Challenge: What's the number of x in y?
//				Scan user input twice
//				Allowed inputs:
//				"s" => seconds
//				"m" => minutes
//				"h" => hours
//				"D" => days
//				"M" => months
//				"Y" => years
//				Input => Output Examples:
//				1st: "M", 2nd: "D" => "There are 30 days in a month"
//				1st: "M", 2nd: "h" => "There are 720 hours in a month"
//				1st: "h", 2nd: "s" => "There are 3600 seconds in an hour"
//				1st: "M", 2nd: "Y" => "There are no years in a month"
//				1st: "s", 2nd: "h" => "There are no hours in a second"
//				Assumptions:
//				There are 30 days in a month
		
        Scanner scanner = new Scanner(System.in);

        // Get user inputs for time units
        System.out.print("Enter the first time unit (s, m, h, D, M, Y): ");
        String unit1 = scanner.nextLine().toUpperCase();

        System.out.print("Enter the second time unit (s, m, h, D, M, Y): ");
        String unit2 = scanner.nextLine().toUpperCase();

     // Define constants for conversions
        int secondsInMinute = 60;
        int minutesInHour = 60;
        int hoursInDay = 24;
        int daysInMonth = 30;
        int monthsInYear = 12;

        // Calculate conversions based on user inputs
        int conversionResult = 0;
        String unit1Name = "";
        String unit2Name = "";

        switch (unit1) {
            case "S":
                conversionResult = 1;
                unit1Name = "second";
                break;
            case "M":
                conversionResult = daysInMonth;
                unit1Name = "month";
                break;
            case "H":
                conversionResult = hoursInDay;
                unit1Name = "hour";
                break;
            case "D":
                conversionResult = daysInMonth * hoursInDay;
                unit1Name = "day";
                break;
            case "Y":
                conversionResult = daysInMonth * hoursInDay * monthsInYear;
                unit1Name = "year";
                break;
            default:
                System.out.println("Invalid input for the first time unit.");
                return;
        }

        switch (unit2) {
            case "S":
                conversionResult *= secondsInMinute;
                unit2Name = "second";
                break;
            case "M":
                conversionResult *= minutesInHour;
                unit2Name = "minute";
                break;
            case "H":
                unit2Name = "hour";
                break;
            case "D":
                unit2Name = "day";
                break;
            case "M":
                unit2Name = "month";
                break;
            case "Y":
                unit2Name = "year";
                break;
            default:
                System.out.println("Invalid input for the second time unit.");
                return;
        }

        // Output the result
        if (conversionResult == 0) {
            System.out.println("Invalid input combination.");
        } else {
            System.out.println("There are " + conversionResult + " " + unit2Name + " in a " + unit1Name + ".");
        }



		
	}

}
