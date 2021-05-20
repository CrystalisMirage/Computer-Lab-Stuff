Ball.prototype.display=function(){
	noStroke();
	fill(255);
	ellipse(this.x,this.y,this.w,this.h);
}