class Tile extends Sprite{
	constructor(sheet,xInd,yInd,x,y){
		super(sheet,xInd,yInd,x,y);
		this.id=entities.active.length;
		entities.active.push(this);
	}
}