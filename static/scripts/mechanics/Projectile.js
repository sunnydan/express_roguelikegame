class Projectile extends Moving{
	constructor(sheet, xInd, yInd, x, y){
		super(sheet, xInd, yInd, x, y);
		this.cap = 5;
		this.acc = 1;
		this.solid=false;
	}

	collide(ent){
		if(ent != this.owner){
			console.log("ON HIT");
		}
	}	
}