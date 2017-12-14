var util = {
	AABB(a,b){
		return a.x < b.x + b.w &&
		a.x + a.w > b.x &&
		a.y < b.y + b.h &&
		a.y + a.h > b.y;	
	},

	distance(a, b) {
		return ((a.x - b.x) ^ 2 + (a.y - b.y) ^ 2) ^ 0.5;
	},

	distanceX(a,b){
		return ((a.x - b.x) ^ 2) ^ 0.5;
	},

	distanceY(a,b){
		return ((a.y - b.y) ^ 2) ^ 0.5;
	},
	// Finds all entities surrounding an entity.
	findInRange(e,range) { // O(N)
		let ents = [];

		for (let i = 0; i < entities.active.length; i++) {
			let ent = entities.active[i];

			if(ent.id != e.id){ // Exclude supplied entity from search.
				let d = util.distance(e, ent);
				if (d < 0) d = -d;
				if (d <= range) ents.push(ent);
			}
		}

		return ents;
	},
	// Finds the closest entity to another entity.
	findClosestInRange(e,range){ // O(N^2)
		let ents = util.findInRange(e,range);
		if(ents.length < 1){return null;}
		let min  = util.distance(ents[0],e);
		let ent  = ents[0];

		if(min < 0) min = -min;

		for(let i=1;i<ents.length;i++){
			let dist = util.distance(ents[i],e);
			if(dist < 0) dist = -dist;

			if(min > dist){
				min = dist;
				ent = ents[i];
			}
		}

		return ent;
	},
	// Finds all entities surrounding an entity by class.
	findByClassInRange(e,range,cls){ // O(N)
		let ents = [];

		for (let i = 0; i < entities.active.length; i++) {
			let ent = entities.active[i];
			let d = util.distance(e, ent);
			if(d < 0) d = -d;
			if(d <= range && ent.class == cls) ents.push(ent);
		}

		return ents;
	},

	loadXML(file,cb){ // file:str,tags:arr,cb:function
		let xml = new XMLHttpRequest();
		xml.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				cb(this.responseXML.children[0].children);
			}
		}
		xml.open("GET",file,true);
		xml.send();
	},
		
	getTime(){
		return new Date().getTime()/1000.0;
	},

	// Kudos to: http://www.html5canvastutorials.com/tutorials/html5-canvas-wrap-text-tutorial/
    textWrap(context, text, x, y, maxWidth, lineHeight) {
		var words = text.split(' ');
		var line = '';

		for(var n = 0; n < words.length; n++) {
			var testLine = line + words[n] + ' ';
			var metrics = context.measureText(testLine);
			var testWidth = metrics.width;

			if (testWidth > maxWidth && n > 0) {
				context.fillText(line, x, y);
				line = words[n] + ' ';
				y += lineHeight;
			}
			else {
				line = testLine;
			}
		}
		context.fillText(line, x, y);
	}
};
