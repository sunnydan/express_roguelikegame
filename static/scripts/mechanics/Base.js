class Base{
	constructor(x,y,w,h){
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.solid=true;
		this.movable=false;
		this.owner=null;
		this.color="#ff0000";
		this.debug=false;
		this.class=this.constructor.name;
	}

	tick(t){

	}

	collide(ent){
		if(this.solid && ent.solid){	
			let bC = (this.y + this.h) - ent.y;
			let tC = (ent.y + ent.h) - this.y;
			let lC = (ent.x + ent.w) - this.x;
			let rC = (this.x + this.w) - ent.x;

			let pen = Math.min(bC,tC,lC,rC);

			if (this.movable) {
				if (tC < bC && tC < lC && tC < rC) { // T
					ent.y = this.y - this.h;
				}
				if (bC < tC && bC < lC && bC < rC) { // B
					ent.y = this.y + this.h;
				}
				if (lC < rC && lC < tC && lC < bC) { // L
					ent.x = this.x - ent.w;
				}
				if (rC < lC && rC < tC && rC < bC) { // R
					ent.x = this.x + this.w;
				}
			} else {
				if (pen == bC) {
					this.y -= pen;
				} else if (pen == tC) {
					this.y += pen;
				} else if (pen == lC) {
					this.x += pen;
				} else if (pen == rC) {
					this.x -= pen;
				}
			}
		}
	}

	render(c){
		if(this.debug){
			c.strokeStyle=this.color;
			c.strokeRect(this.x,this.y,this.w,this.h);
		}
	}
}