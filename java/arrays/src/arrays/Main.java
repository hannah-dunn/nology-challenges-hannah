package arrays;

import java.util.ArrayList;
import java.util.Arrays;

public class Main {

	public static void main(String[] args) {
		
		// Arrays in Java
		// Arrays in Java are a fixed size
		
		// Object can mix data types in arrays, not really desired
		
		String name = "John";
		System.out.println(name);
		String[] names = { "John", "Jane", "Jack" };
		
		System.out.println(names.length);
		System.out.println(names[0]);
		System.out.println(names[1]);
		System.out.println(names[2]);
		
		// there is nothing at the index of 3
		// we get an out of bounds error
//		System.out.println(names[3]);
		
		System.out.println(names);
		
		// this will print the whole array as a string
		System.out.println(Arrays.toString(names));
		
		int[] numbers = new int[4];
		System.out.println(numbers.length);
		System.out.println(Arrays.toString(numbers));
		
		numbers[0] = 45;
		numbers[1] = 32;
		numbers[2] = 78;
		numbers[3] = 90;
		System.out.println(Arrays.toString(numbers));
		
		String[] words = new String[2];
		System.out.println(Arrays.toString(words));
		
		// add something to an array using a for loop
		
		int[] values = { 1, 2, 3 };
		// [1, 2, 3, 4]
		
		int[] longerValues = new int[values.length + 1];
		
		System.out.println(Arrays.toString(longerValues));
		
		for(int i = 0; i < values.length; i++) {
			longerValues[i] = values[i];
		}
		
		System.out.println(Arrays.toString(longerValues));
		longerValues[3] = 4;
		System.out.println(Arrays.toString(longerValues));
		
		values = longerValues;
		
		System.out.println(Arrays.toString(values));
		
		// java inbuilt method to add to an array
		// arraycopy
		
		int[] ages = { 20, 40, 32 };
		
		int[] newAges = new int[ages.length + 1];
		
		System.arraycopy(ages, 0, newAges, 0, ages.length);
		
		System.out.println(Arrays.toString(newAges));
		
		newAges[newAges.length - 1] = 56;
		System.out.println(Arrays.toString(newAges));
		
		ages = newAges;
		
		
		// multi something arrays 
		
		int[][] multi = {{1, 2, 3}, {4, 5, 6}};
		
		System.out.println(multi[0][0]);
		System.out.println(multi[1][0]);
		System.out.println(multi[0][1]);
		
		int [][] multi2 = new int[2][2];
		System.out.println(multi2[0][0]);
		
		for(int i = 0; i < multi.length; i++) {
			System.out.println(Arrays.toString(multi[i]));
			for(int j = 0; j < multi[i].length; j++) {
				System.out.println("The element is " + multi[i][j]);
			}
		}
		
		System.out.println(Arrays.toString(multi));
		
		
//		Create an array that looks like this:
//			[
//			    [
//			        [
//			            [1, 2, 3, 4],
//			            [5, 6, 7, 8],
//			            [9, 10, 11, 12]
//			        ],
//			        [
//			            [13, 14, 15, 16],
//			            [17, 18, 19, 20],
//			            [21, 22, 23, 24]
//			        ]
//			    ],
//			    [
//			        [
//			            [25, 26, 27, 28],
//			            [29, 30, 31, 32],
//			            [33, 34, 35, 36]
//			        ],
//			        [
//			            [37, 38, 39, 40],
//			            [41, 42, 43, 44],
//			            [45, 46, 47, 48]
//			        ]
//			    ]
//			]
//			Use for loop to fill the array with the right values
//			Find a method to print the array to the console as a string
		

		int rows = 2;
		int columns = 3;
		int height = 2;
		int last = 4;
		
		int[][][][] array = new int[height][rows][columns][last];
		
		int value = 1;
		
		for (int i = 0; i < height; i++) {
			for (int j = 0; j < rows; j++) {
				for(int k = 0; k < columns; k++) {
					for(int l = 0; l < last; l++) {
						array[i][j][k][l] = value;
						value++;
					}
				}	
			}
		}
		
//		for(int k = 0; k < height; k++) {
//			for(int i = 0; i < rows; i++) {
//				for(int j = 0; j < columns; j++) {
//					for(int l = 0; l < last; l++) {
//						System.out.print(array[i][j][k][l] + " ");
//					}
//				}
//			}
//				System.out.println();
//	}
		
		// FIX ABOVE^^
		
//		int rows = 12;
//		int columns = 4;
//		
//		int[][] array = new int[rows][columns];
//		
//		int value = 1;
//			for (int i = 0; i < rows; i++) {
//				for (int j = 0; j < columns; j++) {
//				array[i][j] = value;
//				value++;
//				}
//			}
//		for(int i = 0; i < rows; i++) {
//			for(int j = 0; j < columns; j++) {
//				System.out.print(array[i][j] + " ");
//			}
//			System.out.println();
//		}	
		
		
		// dynamic array implementation
		
		DynamicArray arr = new DynamicArray();
		System.out.println(arr.size() + " dynamic array size");
		arr.add(1);
		arr.add(1);
		arr.add(1);
		
		arr.viewArray();
		
		System.out.println(arr.get(0));
		
		
		// creating an ArrayList, a resize data structure
		//use this instead of dynamic array?? easier?? google to check
		ArrayList<String> stringList = new ArrayList<String>();
		System.out.println(stringList.size() + " length after creating");
		stringList.add("hello");
		stringList.add("java");
		System.out.println(stringList.size() + " length after adding elements");
		System.out.println(stringList);
		
		// can't have ArrayList<int> have to have <Integer>, which is a wrapper around int
		// Integer is a wrapper class
		// allows us to treat ints as objects, can't store primitive data types in an ArrayList
		ArrayList<Integer> ints = new ArrayList<Integer>();
		ints.add(1);
		ints.add(2);
		ints.add(3);
		System.out.println(ints);
		
		// initialize an ArrayList with elements inside it
		ArrayList<Integer> ints2 = new ArrayList<>(Arrays.asList(111, 222));
		System.out.println(ints2);
		System.out.println(ints.get(0)); 
		
	}

}
