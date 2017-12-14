var input = {
	keys:[],

	keyDown:(key)=>{
		return input.keys[key] == true;
	},
	keyUp:(key)=>{
		return input.keys[key] == true;
	},
}

document.addEventListener("keydown",(e)=>{
	input.keys[e.key] = true;
});
document.addEventListener("keyup",(e)=>{
	input.keys[e.key] = false;
});
