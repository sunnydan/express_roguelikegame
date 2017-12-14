class Game{
	constructor(w,h){
		this.id=0;
		this.before=0;
		this.after=0;
		this.delta=0;
		this.window=new Window(w,h);
	}

	start(){
		// let tile = new Tile(rogueSheet,1,0,128,128);
		let npc  = new NPC(rogueSheet,8,0,480,480);
		let pl   = new Player(rogueSheet,7,0,512,512);

		// console.log(entities.active);

		this.run(this);
	}

	stop(){
		cancelAnimationFrame(this.id);
	}

	run(self){
		this.after=util.getTime();
		this.delta=this.after-this.before;
		this.window.tick(this.delta);
		this.window.render();
		this.before=util.getTime();

		requestAnimationFrame(()=>{
			this.run(self);
		});
	}
}