package interfaces;

public class HealthPotion implements AppliesEffect {

	@Override
	public void apply(Player player) {
		player.setHealth(player.getHealth() + 28);
	}

}
