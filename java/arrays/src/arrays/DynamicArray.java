package arrays;

import java.util.Arrays;

public class DynamicArray {

	private int[] data;
	private int length;
	private int capacity;
	
	public DynamicArray() {
		this.length = 0;
		this.capacity = 10;
		this.data = new int[this.capacity];
	}
	
	private void resize() {
		this.capacity *= 2;
		this.data = Arrays.copyOf(this.data, this.capacity);
	}
	
	public void add(int item) {
		this.data[this.length++] = item;
		if(this.length == this.capacity) {
			// resize the array
			this.resize();
		}
	}
	
	public int size() {
		return this.length;
	}
	
	public void viewArray() {
		System.out.println(Arrays.toString(this.data));
	}
	
	public int get(int index) {
		return this.data[index];
	}

}
