class Sprite extends Base{
	constructor(sheet,xInd,yInd,x,y){
		if(!sheet){console.log("Invalid SpriteSheet: "+sheet);}
		if(!sheet.sprites[xInd][yInd]){console.log("Non-existant sprite index: ["+xInd+"]"+"["+yInd+"]"+" in sheet: "+sheet); return;}

		super(x,y,0,0); 
		this.img=sheet.imageObj;
		this.w=sheet.sprites[xInd][yInd].w;
		this.h=sheet.sprites[xInd][yInd].h;
		this.cX = sheet.sprites[xInd][yInd].cX; //Crop X and Y from spritesheet.
		this.cY=sheet.sprites[xInd][yInd].cY;
	}

	setImage(sheet,xInd,yInd){
		this.img=sheet.imageObj;
		this.w=sheet.sprites[xInd][yInd].w;
		this.h=sheet.sprites[xInd][yInd].h;
		this.cX=sheet.sprites[xInd][yInd].cX;
		this.cY=sheet.sprites[xInd][yInd].cY;
	}

	animate(c){

	}

	tick(t){

	}

	render(c,x=this.x,y=this.y,newW=this.w,newH=this.h){
		this.animate(c);
		//allows location(x,y) and resizing (newW,newH), specifically when viewing the avatar
		c.drawImage(this.img, this.cX, this.cY, this.w, this.h, x, y, newW, newH)
		
		super.render(c);
	}
}