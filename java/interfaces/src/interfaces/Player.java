package interfaces;

public class Player {

	private int health;
	private final int maxHealth = 100;
	
	// constructor
	public Player(int health) {
		this.setHealth(health);
	}
	
	// getter
	public int getHealth() {
		return this.health;
	}
	
	// setter
	public void setHealth(int health) {
		// if the value is more that max
		// set it to max
		if(health > this.maxHealth) {
			this.health = this.maxHealth;
		} else if(health < 0) {
			this.health = 0;
		} else {
			this.health = health;
		}
	}
	
}
