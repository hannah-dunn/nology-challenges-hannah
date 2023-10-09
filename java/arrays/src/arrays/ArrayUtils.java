package arrays;

import java.util.Arrays;

public class ArrayUtils {

	public static void main(String[] args) {
		// Create a class called ArrayUtils
		
		// add a method that takes in an int[] array and returns an array with elements 
		// Incremented by one
		
		int[] elements = { 11, 22, 33 };
		
		int n = elements.length;
		
		for (int i = 0; i < n; i++) {
			elements[i] = elements[i] + 1;
		}
		
		for (int i = 0; i < n; i++) { 
            System.out.print(elements[i]); 
            System.out.print(" "); 
        }
				
		// add a method that takes in an int[] array and returns reversed arrays
		
		int[] reversed = { 11, 22, 33 };
		
		System.out.println();
		System.out.println("Reversed array");
		for(int i = reversed.length - 1; i >= 0; i--)
			System.out.print(reversed[i] + " ");
		
				
		// a method that removes the last element from an array
		
//		int[] lastArr = {2, 4, 6, 8};
//      int[] newLastArr = new int[ lastArr.length - 1];
//      System.arraycopy(lastArr, 0, newLastArr, 0, lastArr.length);
//      System.out.println(Arrays.toString(newLastArr));  
//      newLastArr[newLastArr.length - 1] 
        		
        int arr[] = {2, 4, 6, 8};
        
        int newArr[] = Arrays.copyOf(arr, arr.length - 1);
 
        System.out.println();
        System.out.println("Original  : " + Arrays.toString(arr));
        System.out.println("New Array : " + Arrays.toString(newArr));		
        
        
//        int[] newArray = new int[numArray.length - 1];
//        System.arraycopy(numArray, 0, newArray, 0, numArray.length - 1);
//        return newArray;

	}

}
