class Player extends NPC{
	constructor(sheet, xInd, yInd, x, y){
		super(sheet, xInd, yInd, x, y);
		this.fireDelay = .25;
		this.cur = util.getTime();
		this.interacting = false;
	}

	interact(){

	}

	move(dt){
		if(input.keyDown("a")){
			this.xDir = DIR_LEFT;
		}else if(input.keyDown("d")){
			this.xDir = DIR_RIGHT;
		}else if(!input.keyDown("a" && !input.keyDown("d"))){
			this.xDir = DIR_IDLE;
		}

		if(input.keyDown("w")){
			this.yDir = DIR_UP;
		}else if(input.keyDown("s")){
			this.yDir = DIR_DOWN;
		}else if(!input.keyDown("w" && !input.keyDown("s"))){
			this.yDir = DIR_IDLE;
		}

		//TODO: Mouse Based / Directional aiming. This was here for testing.
	}

	interact(){
		if(input.keyDown("e") && !this.interacting){
			let ent = util.findClosestInRange(
				this,
				this.interactRange
			);

			if(ent != null && ent.canInteract) ent.onInteract(this); // Fire NPC's interact event

			this.interacting = true;
		}else if(!input.keyDown("e") && this.interacting){
			this.interacting = false;
		}
	}
}