class NPC extends Moving{
	constructor(sheet, xInd, yInd, x, y){
		super(sheet, xInd, yInd, x, y);
		this.interactRange = 45;
		this.canInteract   = true;
		this.dialogue      = new Dialogue(this,"What are you raging about?");
	}

	interact(){

	}
	
	// Passes the entity that fired the event that interacted with it
	onInteract(ent){
		this.dialogue.toggle();
	}

	animate(c){

	}

	move(dt){
		
	}

	attack(NPC){
		
	}

	tick(dt){
		super.tick(dt);
		this.interact();
	}
}