var keys=[];
function keyPressed(){
	 keys[keyCode]=true;
}

function keyReleased(){
	keys[keyCode]=false;
}

Ball.prototype.update=function(){

}