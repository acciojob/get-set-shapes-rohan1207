//complete this code
class Rectangle {
	let width;
	let height;
	constructor(width,height){
		this.width=width;
		this.height=height;
	}

	 area(){
		 return this._height*this._weidth;
	 }
}

class Square extends Animal {

	constructor(side){
		this._side=side;
	}

	perimeter(){
		return 4*this._side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
