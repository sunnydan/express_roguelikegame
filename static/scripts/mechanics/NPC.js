class NPC extends Moving{
	constructor(sheet, xInd, yInd, x, y){
		super(sheet, xInd, yInd, x, y);
		this.interactRange = 45
		this.canInteract   = true;
		this.dialog = [
			"What drives your rage?",
			"What are you angry about?",
			"Did someone's dog defecate on your lawn?",
			"Did you defecate on your lawn?"
		];
	}
	interact(){

	}
	// Passes the entity that fired the event that interacted with it
	onInteract(ent){
		// TODO: Render a dialog box, displaying the NPC's dialog.
		console.log(this.dialog,ent);
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