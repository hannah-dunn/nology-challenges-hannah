package interfaces;

public class Arrow implements AppliesEffect {

	@Override
	public void apply(Player player) {
		player.setHealth(player.getHealth() - 10);
	}

	
}
