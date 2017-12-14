class Moving extends Tile{
	constructor(sheet, xInd, yInd, x, y){
		super(sheet, xInd, yInd, x, y);
		this.xV=0;
		this.yV=0;
		this.friction=.25;
		this.acc=10;
		this.cap=20;
		this.xDir=0;
		this.yDir=0;
	}

	move(dt){
		
	}

	tick(dt){
		this.x += this.xV;
		this.y += this.yV;

		this.xV *= (1 - Math.min(this.friction, 1));
		this.yV *= (1 - Math.min(this.friction, 1));

		if(this.xDir == DIR_LEFT && this.xV > -this.cap){
			this.xV -= this.acc*dt;
		}else if(this.xDir == DIR_RIGHT && this.xV < this.cap){
			this.xV += this.acc*dt;
		}

		if(this.yDir == DIR_UP && this.yV > -this.cap) {
			this.yV -= this.acc*dt;
		}else if(this.yDir == DIR_DOWN && this.yV < this.cap) {
			this.yV += this.acc*dt;
		}

		this.move(dt);
	}
}