function setup(){
	createCanvas(600,600)
}
var scene='home'
function draw(){
	switch(scene){
		case 'home':
			home();
			break;
	}
}