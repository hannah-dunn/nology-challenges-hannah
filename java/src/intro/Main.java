package intro;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// boolean
		// const someBool - true;
		// let someBool = "hello"; wont work, not like javascript
		boolean someBool = true;
		System.out.println(someBool);
		System.out.println("Hello world");
		
		char someChar = 'a';
		System.out.println(someChar);
		
		// String is not a primitive data type in Java
		String someString = "hello";
		System.out.println(someString);
		// == we shouldn't be using this to compare com
		
		// numeric data types
		
		byte someByte = 12;
		System.out.println(someByte);
		
		// eight types of primitive data types
		
		// byte
		// short
		// int
		// long
		// float
		// double
		// boolean
		// char
		
		// numbers from -32,768 to 32,767
				short someShort = 32_767;
				System.out.println(someShort);
				
		// int from -2,147,483,648 to 2,147,483,647
				int someInt = 2_147_483_647;
				System.out.println(someInt);
				
		// long from -9,223,372,036,854,775,808 
		// to 9,223,372,036,854,775,807
				long someLong = 9_223_372_036_854_775_807l;
				
		// 4 bytes of memory
		// precision for 6 to 7 decimal digits
				float someFloat = 12.123456f;
				System.out.println(someFloat);
				
		// 8 bytes of memory
		// 15 decimal digits
				double someDouble = 1.1234567891234566;
				
				System.out.println(someDouble);
				
		// casting data types
				int intTwo = 2;
				
		// this is not safe because we are loosing some data
				byte byteTwo = (byte) 1789;
				System.out.println(byteTwo);
				
				byte byteThree = 12;
				short shortTwo = byteThree;
				System.out.println(shortTwo);
				
				float floatTwo = 545612.123456789f;
				System.out.println(floatTwo);
				
				float floatThree = 1.23f;
				
				int intFour = (int) floatThree;
				System.out.println(intFour);
				
				// byte and int
				
				byte byteFive = 5;
				byte byteSix = 17;
				int intFive = 30_0000;
				long longFive = 145678789;
				
				float floatSix = 12.345f;
				double doubleSix = 12.4566854;
				
				// int
				System.out.println(((Object)(byteFive + intFive))
						.getClass().getName());
				
				// int
				System.out.println(((Object)(byteFive + byteSix))
						.getClass().getName());
				
				// long
				System.out.println(((Object)(byteFive * longFive))
						.getClass().getName());
				
				
				// float
				System.out.println(((Object)(intFive * floatSix))
						.getClass().getName());
				
				// float
				System.out.println(((Object)(byteFive * floatSix))
								.getClass().getName());
				
				// double
				System.out.println(((Object)(byteFive * doubleSix))
						.getClass().getName());
				
				// double
				System.out.println(((Object)(floatSix * doubleSix))
						.getClass().getName());
				
				// float
				System.out.println(((Object)(floatSix * floatThree))
						.getClass().getName());
				
				// Read an input from the user
				// Scanner
		
		Scanner s = new Scanner(System.in);
		System.out.println("Please enter an integer");
		int fromUser = s.nextInt();
		System.out.println("Your input was " + fromUser);
		
//		Challenge: Primitive Types
//		MVP:
//		Challenge 1: Create a byte, short, integer and double. Use a scanner to get numerical input from the terminal
//
//		Produce an integer by dividing your byte by a number input in the terminal
		
		Scanner s2 = new Scanner(System.in);
		System.out.println("Please enter an integer");
		byte byteNew = 10;
		int inputFromUser = s2.nextInt();
		System.out.println(((Object)(byteNew % inputFromUser))
				.getClass().getName());
		
//		Produce a long by multiplying your short by a number input in the terminal
		
		short shortNew = 300;
		Scanner s3 = new Scanner(System.in);
		System.out.println("Please enter a long");
		long inputFromUser3 = s3.nextLong();
		System.out.println(((Object)(shortNew * inputFromUser3)).getClass().getName());
		
//		Produce a double by dividing your integer by a number input in the terminal
		
		int intNew = 365;
		Scanner s4 = new Scanner(System.in);
		System.out.println("Please enter a double");
		double inputFromUser4 = s4.nextDouble();
		System.out.println(((Object)(intNew / inputFromUser4)).getClass().getName());
		
//		Produce a char that is the first character in a string input in the terminal
		
		System.out.println("Please enter something");
		String fromTerminal = s.next();
		char myChar = fromTerminal.charAt(0);
		System.out.println(myChar);
		
	}

}
