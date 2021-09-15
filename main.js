//Create a reference for canvas 
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getcontext("2d");
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
var greencar_width=75;
var greencar_height=100;
var greencar_x=5;
var greencar_y=225;

//Set initial position for a car image.


function add() {
	//upload car, and background images on the canvas.
	background_imgTag= new Image();
    background_imgTag.onload = uploadBackground;
	background_imgTag.src= background_image;

	greencar_imgTag= new Image();
    greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src= greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(greencar_imgtag, greencar_x, greencar_y, greencar_width, greencar_height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgtag, greencar_x, greencar_y, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("when up arrow is pressed,  X =" = greencar_x + "| y ="  +greencar_y);
	}
}

function down()
{
	//Define function to move the car downward
	if(greencar_y <=600)
	{
		greencar_y = greencar_y +10;
		console.log("when down arrow is pressed,  X =" = greencar_x + "| y ="  +greencar_y);
	}
}

function left()
{
	//Define function to move the car left side
	if(greencar_x >=0)
	{
		greencar_x = greencar_x - 10;
		console.log("when left arrow is pressed,  X =" = greencar_x + "| y ="  +greencar_y);
	}
}

function right()
{
	//Define function to move the car right side
	if(greencar_y <=800)
	{
		greencar_x = greencar_x + 10;
		console.log("when right arrow is pressed,  X =" = greencar_x + "| y ="  +greencar_y);
	}
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
	keyPressed= e.keycode;
	console.log(keyPressed);
	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("up");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("up");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("up");
	}
}

