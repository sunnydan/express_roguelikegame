class Game{
	constructor(w,h){
		this.id=0;
		this.before=0;
		this.after=0;
		this.delta=0;
		this.window=new Window(w,h);
		this.paused=false;
	}

	start(){
		// let npc  = new NPC(rogueSheet,8,0,480,480);		
		let pl = new Player(rogueSheet,7,0,512,512);
		
		// let menu = gui.create("Menu");
		// menu.y = 128;

		gui.create("PauseMenu");

		let e = new Emitter();
		e.x = 512;
		e.y = 512;
		e.rate=0;
		e.onEmit=()=>{
			let g = util.randRange(50,100);
			let rand = util.randRange(0,255);

			let a = Math.random()*2-1;
			if(a < 0){a=1;}

			// let p2 = new Particle(e);
			// p2.gravity=-.5;
			// p2.xV=util.randRange(-3,3);
			// p2.yV=util.randRange(-3,3);
			// p2.decay=60;
			// p2.startSize=30;
			// p2.endSize=0;
			// p2.color="rgba("+g+","+g+","+g+","+.25+")";

			let c1 = util.randRange(30,147);
			let c2 = util.randRange(0,51);
			let c3 = util.randRange(204,255);

			let q = new Particle(e);
			q.gravity=-.0125;
			q.xV=util.randRange(-2,2);
			q.yV=util.randRange(-4,4);
			q.decay=100;
			q.startSize=100;
			q.endSize=0;
			q.color="rgb("+c1+","+c2+","+c3+")";
			// q.color="rgba("+g+","+g+","+g+","+.25+")";

			// let p = new Particle(e);
			// p.gravity=-.125;
			// p.xV=util.randRange(-2,2);
			// p.yV=util.randRange(-4,4);
			// p.decay=60;
			// p.startSize=100;
			// p.endSize=0;
			// p.color="rgba(255,"+g+",0,"+.5+")";

			// let p3 = new Particle(e);
			// p3.gravity=-.25;
			// p3.xV=util.randRange(-2,2);
			// p3.yV=p2.yV;
			// p3.decay=40;
			// p3.startSize=30;
			// p3.endSize=0;
			// p3.color="rgba(255,"+g+",0,"+a+")";
		}
		e.attach(pl);

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