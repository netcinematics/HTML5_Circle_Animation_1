/*----------TEST--ANIMATIONS------------------------*/
var head_centroid_1 = {x:100,y:100};
var head_centroid_2 = {x:200,y:100};
var head_centroid_3 = {x:300,y:100};
var head_centroid_4 = {x:400,y:100};
var head_centroid_5 = {x:500,y:100};
var head_centroid_6 = {x:650,y:100};
var mice_circles_total = [ 5,5,5,5,5,25];
/*----------END--TEST--ANIMATIONS------------------------*/

var canvas, ctx;
var circles = [];
var selectedCircle;
var hoveredCircle;
var button;
var moving = false;
var speed = 2.0;

// -------------------------------------------------------------

// objects :

function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function Button(x, y, w, h, state, image) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = state;
    this.imageShift = 0;
    this.image = image;
}
// -------------------------------------------------------------

// draw functions :

function clear() { // clear canvas function
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawCircle(ctx, x, y, radius) { // draw circle function
    ctx.fillStyle = 'rgba(255, 35, 55, 1.0)';

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, true);
    ctx.closePath();

    ctx.fill();

    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.stroke(); // draw border
}

function drawScene() { // main drawScene function
    clear(); // clear canvas

    // draw the title text
    ctx.font = '42px DS-Digital';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('SPACE-RATS', ctx.canvas.width/2, 50);
	ctx.font = '12px DS-Digital';
	//WRITE--LABELS--------------------------------------------------------------
	ctx.fillText('BASE-FACE#1', 95, 160);
	ctx.fillText('BASE-FACE#2', head_centroid_2.x-5, 160);
	ctx.fillText('BASE-FACE#3', head_centroid_3.x-5, 160);
	ctx.fillText('BASE-FACE#4', head_centroid_4.x-5, 160);
	ctx.fillText('BASE-FACE#5', head_centroid_5.x-5, 160);
	ctx.fillText('BASE-FACE#6', head_centroid_6.x-5, 160);

    var bg_gradient = ctx.createLinearGradient(0, 200, 0, 400);
    bg_gradient.addColorStop(0.0, 'rgba(255, 0, 0, 0.8)');
    bg_gradient.addColorStop(0.5, 'rgba(0, 255, 0, 0.8)');
    bg_gradient.addColorStop(1.0, 'rgba(0, 0, 255, 0.8)');

	//--CTX--DRAWING---------------------------------------------------------each-mouse-outline
    ctx.beginPath(); // custom shape begin
    ctx.fillStyle = bg_gradient;
    ctx.moveTo(circles[0].x, circles[0].y);
    for (var i=0; i<circles.length; i++) {
        ctx.lineTo(circles[i].x, circles[i].y);
    }
    ctx.closePath(); // custom shape end
    ctx.fill(); // fill custom shape

	//--CTX--DRAWING---------------------------------------------------------each-mouse-outline
/*	var mouse_adjust = 0;
	for(var x = 0; x < mice_circles_total.length; x++){
	
		var mice_circles_num = mice_circles_total[x];
	
		ctx.beginPath(); // custom shape begin
		ctx.fillStyle = bg_gradient;
		ctx.moveTo(circles[mouse_adjust].x, circles[mouse_adjust].y);
		for (var i=0; i< mice_circles_num + mouse_adjust; i++) {
			ctx.lineTo(circles[i+mouse_adjust].x, circles[i+mouse_adjust].y);
		}
		
		mouse_adjust += mice_circles_num;
		
		ctx.closePath(); // custom shape end
		ctx.fill(); // fill custom shape
		}
*/
		
		//circle border
		ctx.lineWidth = 2;
		ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
		ctx.stroke(); // draw border
	
		
    // reverting direction
    if (circles[0].x <= 300 || circles[0].x >= 385) {
        speed = -speed;
    }

    // central object behavior
    if (moving) {
        circles[0].x -= speed;
        circles[0].y -= speed;
        circles[1].x += speed;
        circles[1].y -= speed;
        circles[2].x += speed;
        circles[2].y += speed;
        circles[3].x -= speed;
        circles[3].y += speed;
    }

	
//--------------------------------------------! PLACE A CIRCLE.
//    drawCircle(ctx, circles[0].x, circles[0].y, (hoveredCircle == 0) ? 25 : 15);
//    drawCircle(ctx, circles[1].x, circles[1].y, (hoveredCircle == 1) ? 25 : 15);
//    drawCircle(ctx, circles[2].x, circles[2].y, (hoveredCircle == 2) ? 25 : 15);
//    drawCircle(ctx, circles[3].x, circles[3].y, (hoveredCircle == 3) ? 25 : 15);
//    drawCircle(ctx, circles[4].x, circles[4].y, (hoveredCircle == 4) ? 25 : 25);	
//--------------------------------------------! PLACE A CIRCLE.
     //Iterate-Circles-Placement.
    /*for(var i=0; i<circles.length/5;i++){
	 drawCircle(ctx, circles[i].x, circles[i].y, (hoveredCircle == 0) ? 25 : 15);
	}
    for(var i=0; i<circles.length/5+5;i++){
	 drawCircle(ctx, circles[i].x, circles[i].y, (hoveredCircle == 0) ? 25 : 15);
	}
    for(var i=0; i<circles.length/5+10;i++){
	 drawCircle(ctx, circles[i].x, circles[i].y, (hoveredCircle == 0) ? 25 : 15);
	}
    for(var i=0; i<circles.length/5+15;i++){
	 drawCircle(ctx, circles[i].x, circles[i].y, (hoveredCircle == 0) ? 25 : 15);
	}
    for(var i=0; i<circles.length/5+20;i++){
	 drawCircle(ctx, circles[i].x, circles[i].y, (hoveredCircle == 0) ? 25 : 15);
	}*/

//--------------------------------------------! PLACE A CIRCLE.
    drawCircle(ctx, circles[0].x, circles[0].y, (hoveredCircle == 0) ? 25 : 15);
    drawCircle(ctx, circles[1].x, circles[1].y, (hoveredCircle == 1) ? 25 : 15);
    drawCircle(ctx, circles[2].x, circles[2].y, (hoveredCircle == 2) ? 25 : 15);
    drawCircle(ctx, circles[3].x, circles[3].y, (hoveredCircle == 3) ? 25 : 15);
    drawCircle(ctx, circles[4].x, circles[4].y, (hoveredCircle == 4) ? 25 : 15);	
//------------------------------------------------------------------------
    drawCircle(ctx, circles[5].x, circles[5].y, (hoveredCircle == 0) ? 25 : 25);
    drawCircle(ctx, circles[6].x, circles[6].y, (hoveredCircle == 1) ? 25 : 15);
    drawCircle(ctx, circles[7].x, circles[7].y, (hoveredCircle == 2) ? 25 : 15);
    drawCircle(ctx, circles[8].x, circles[8].y, (hoveredCircle == 3) ? 25 : 25);
    drawCircle(ctx, circles[9].x, circles[9].y, (hoveredCircle == 4) ? 25 : 25);	
//------------------------------------------------------------------------
    drawCircle(ctx, circles[10].x, circles[10].y, (hoveredCircle == 0) ? 25 : 20);
    drawCircle(ctx, circles[11].x, circles[11].y, (hoveredCircle == 1) ? 25 : 15);
    drawCircle(ctx, circles[12].x, circles[12].y, (hoveredCircle == 2) ? 25 : 15);
    drawCircle(ctx, circles[13].x, circles[13].y, (hoveredCircle == 3) ? 25 : 20);
    drawCircle(ctx, circles[14].x, circles[14].y, (hoveredCircle == 4) ? 25 : 20);	
//------------------------------------------------------------------------
    drawCircle(ctx, circles[15].x, circles[15].y, (hoveredCircle == 0) ? 25 : 15);
    drawCircle(ctx, circles[16].x, circles[16].y, (hoveredCircle == 1) ? 25 : 15);
    drawCircle(ctx, circles[17].x, circles[17].y, (hoveredCircle == 2) ? 25 : 15);
    drawCircle(ctx, circles[18].x, circles[18].y, (hoveredCircle == 3) ? 25 : 15);
    drawCircle(ctx, circles[19].x, circles[19].y, (hoveredCircle == 4) ? 25 : 25);	
//------------------------------------------------------------------------
    drawCircle(ctx, circles[20].x, circles[20].y, (hoveredCircle == 0) ? 25 : 15);
    drawCircle(ctx, circles[21].x, circles[21].y, (hoveredCircle == 1) ? 25 : 15);
    drawCircle(ctx, circles[22].x, circles[22].y, (hoveredCircle == 2) ? 25 : 15);
    drawCircle(ctx, circles[23].x, circles[23].y, (hoveredCircle == 3) ? 25 : 15);
    drawCircle(ctx, circles[24].x, circles[24].y, (hoveredCircle == 4) ? 25 : 25);	
//------------------------------------------------------------------------
//HEAD-6
//--------------------------------------------! PLACE A CIRCLE.
    drawCircle(ctx, circles[25].x, circles[25].y, (hoveredCircle == 0) ? 25 : 15);
    drawCircle(ctx, circles[26].x, circles[26].y, (hoveredCircle == 1) ? 25 : 15);
    drawCircle(ctx, circles[27].x, circles[27].y, (hoveredCircle == 2) ? 25 : 15);
    drawCircle(ctx, circles[28].x, circles[28].y, (hoveredCircle == 3) ? 25 : 15);
    drawCircle(ctx, circles[29].x, circles[29].y, (hoveredCircle == 4) ? 25 : 25);	
    drawCircle(ctx, circles[30].x, circles[30].y, (hoveredCircle == 0) ? 25 : 25);
    drawCircle(ctx, circles[31].x, circles[31].y, (hoveredCircle == 1) ? 25 : 15);
    drawCircle(ctx, circles[32].x, circles[32].y, (hoveredCircle == 2) ? 25 : 15);
    drawCircle(ctx, circles[33].x, circles[33].y, (hoveredCircle == 3) ? 25 : 25);
    drawCircle(ctx, circles[34].x, circles[34].y, (hoveredCircle == 4) ? 25 : 25);	
    drawCircle(ctx, circles[35].x, circles[35].y, (hoveredCircle == 0) ? 25 : 20);
    drawCircle(ctx, circles[36].x, circles[36].y, (hoveredCircle == 1) ? 25 : 15);
    drawCircle(ctx, circles[37].x, circles[37].y, (hoveredCircle == 2) ? 25 : 15);
    drawCircle(ctx, circles[38].x, circles[38].y, (hoveredCircle == 3) ? 25 : 20);
    drawCircle(ctx, circles[39].x, circles[39].y, (hoveredCircle == 4) ? 25 : 30);	
    drawCircle(ctx, circles[40].x, circles[40].y, (hoveredCircle == 0) ? 25 : 15);
    drawCircle(ctx, circles[41].x, circles[41].y, (hoveredCircle == 1) ? 25 : 15);
    drawCircle(ctx, circles[42].x, circles[42].y, (hoveredCircle == 2) ? 25 : 15);
    drawCircle(ctx, circles[43].x, circles[43].y, (hoveredCircle == 3) ? 25 : 15);
    drawCircle(ctx, circles[44].x, circles[44].y, (hoveredCircle == 4) ? 25 : 25);	
    drawCircle(ctx, circles[45].x, circles[45].y, (hoveredCircle == 0) ? 25 : 15);
    drawCircle(ctx, circles[46].x, circles[46].y, (hoveredCircle == 1) ? 25 : 15);
    drawCircle(ctx, circles[47].x, circles[47].y, (hoveredCircle == 2) ? 25 : 15);
    drawCircle(ctx, circles[48].x, circles[48].y, (hoveredCircle == 3) ? 25 : 15);
    drawCircle(ctx, circles[49].x, circles[49].y, (hoveredCircle == 4) ? 25 : 25);	
//------------------------------------------------------------------------

    // draw button
    ctx.drawImage(button.image, 0, button.imageShift, button.w, button.h, button.x, button.y, button.w, button.h);

    // draw text
    ctx.font = '30px DS-Digital';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Play/Pause', 135, 480);
    ctx.fillText(button.state, 135, 515);
}

// -------------------------------------------------------------

// initialization

$(function(){
    canvas = document.getElementById('scene');
    ctx = canvas.getContext('2d');

    var circleRadius = 15;
    var width = canvas.width;
    var height = canvas.height;

    // lets add 4 circles manually
/*    
	circles.push(new Circle(width / 2 - 20, height / 2 - 20, circleRadius)); //top-left
    circles.push(new Circle(width / 2 + 20, height / 2 - 20, circleRadius));  //tr
    circles.push(new Circle(width / 2 + 20, height / 2 + 20, circleRadius));   //br
    circles.push(new Circle(width / 2 - 20, height / 2 + 20, circleRadius));    //bl
    circles.push(new Circle(width / 2 - 80, height / 2 + 40, circleRadius));      //nose
*/
   /*--AROUND-100-XY*/ //tHE-bASE-lAYOUT
    circles.push(new Circle(head_centroid_1.x-25,head_centroid_1.y-25 , circleRadius+3));	  //lEar
    circles.push(new Circle(head_centroid_1.x-10,head_centroid_1.y , circleRadius+3));     //rEar
    circles.push(new Circle(head_centroid_1.x+10,head_centroid_1.y , circleRadius));   //rEye
    circles.push(new Circle(head_centroid_1.x+25,head_centroid_1.y-25 , circleRadius));  //lEye
    circles.push(new Circle(head_centroid_1.x,head_centroid_1.y+15 , circleRadius+3)); //nose
	//-------------------------------------------------------------!ADD-NEW-CIRCLE
	/*--AROUND200-XY*/ //tHE-bASE-lAYOUT
    circles.push(new Circle(head_centroid_2.x-25,head_centroid_2.y-25 , circleRadius+3));	  //lEar
    circles.push(new Circle(head_centroid_2.x-10,head_centroid_2.y , circleRadius+3));     //rEar
    circles.push(new Circle(head_centroid_2.x+10,head_centroid_2.y , circleRadius));   //rEye
    circles.push(new Circle(head_centroid_2.x+25,head_centroid_2.y-25 , circleRadius));  //lEye
    circles.push(new Circle(head_centroid_2.x,head_centroid_2.y+15 , circleRadius+3)); //nose
	//-------------------------------------------------------------!ADD-NEW-CIRCLE
	/*--AROUND300-XY*/ //tHE-bASE-lAYOUT
    circles.push(new Circle(head_centroid_3.x-25,head_centroid_2.y-25 , circleRadius+3));	  //lEar
    circles.push(new Circle(head_centroid_3.x-10,head_centroid_2.y , circleRadius+3));     //rEar
    circles.push(new Circle(head_centroid_3.x+10,head_centroid_2.y , circleRadius));   //rEye
    circles.push(new Circle(head_centroid_3.x+25,head_centroid_2.y-25 , circleRadius));  //lEye
    circles.push(new Circle(head_centroid_3.x,head_centroid_2.y+15 , circleRadius+3)); //nose
	//-------------------------------------------------------------!ADD-NEW-CIRCLE
	/*--AROUND400-XY*/ //tHE-bASE-lAYOUT
    circles.push(new Circle(head_centroid_4.x-25,head_centroid_2.y-25 , circleRadius+3));	  //lEar
    circles.push(new Circle(head_centroid_4.x-10,head_centroid_2.y , circleRadius+3));     //rEar
    circles.push(new Circle(head_centroid_4.x+10,head_centroid_2.y , circleRadius));   //rEye
    circles.push(new Circle(head_centroid_4.x+25,head_centroid_2.y-25 , circleRadius));  //lEye
    circles.push(new Circle(head_centroid_4.x,head_centroid_2.y+15 , circleRadius+3)); //nose
	//-------------------------------------------------------------!ADD-NEW-CIRCLE
	/*--AROUND500-XY*/ //tHE-bASE-lAYOUT
    circles.push(new Circle(head_centroid_5.x-25,head_centroid_2.y-25 , circleRadius+3));	  //lEar
    circles.push(new Circle(head_centroid_5.x-10,head_centroid_2.y , circleRadius+3));     //rEar
    circles.push(new Circle(head_centroid_5.x+10,head_centroid_2.y , circleRadius));   //rEye
    circles.push(new Circle(head_centroid_5.x+25,head_centroid_2.y-25 , circleRadius));  //lEye
    circles.push(new Circle(head_centroid_5.x,head_centroid_2.y+15 , circleRadius+3)); //nose
	//-------------------------------------------------------------!ADD-NEW-CIRCLE

    //---------------------------------------------------------------------------------
    //HEAD-6
    circles.push(new Circle(head_centroid_6.x-25,head_centroid_6.y-25 , circleRadius+3));	  //lEar
    circles.push(new Circle(head_centroid_6.x-10,head_centroid_6.y , circleRadius+3));     //rEar
    circles.push(new Circle(head_centroid_6.x+10,head_centroid_6.y , circleRadius));   //rEye
    circles.push(new Circle(head_centroid_6.x+25,head_centroid_6.y-25 , circleRadius));  //lEye
    circles.push(new Circle(head_centroid_6.x,head_centroid_6.y+15 , circleRadius+3)); //nose
	//-------------------------------------------------------------!ADD-NEW-CIRCLE
    circles.push(new Circle(head_centroid_6.x-25,head_centroid_6.y-25 , circleRadius+3));	  //lEar
    circles.push(new Circle(head_centroid_6.x-10,head_centroid_6.y , circleRadius+3));     //rEar
    circles.push(new Circle(head_centroid_6.x+10,head_centroid_6.y , circleRadius));   //rEye
    circles.push(new Circle(head_centroid_6.x+25,head_centroid_6.y-25 , circleRadius));  //lEye
    circles.push(new Circle(head_centroid_6.x,head_centroid_6.y+15 , circleRadius+3)); //nose
	//-------------------------------------------------------------!ADD-NEW-CIRCLE
    circles.push(new Circle(head_centroid_6.x-25,head_centroid_6.y-25 , circleRadius+3));	  //lEar
    circles.push(new Circle(head_centroid_6.x-10,head_centroid_6.y , circleRadius+3));     //rEar
    circles.push(new Circle(head_centroid_6.x+10,head_centroid_6.y , circleRadius));   //rEye
    circles.push(new Circle(head_centroid_6.x+25,head_centroid_6.y-25 , circleRadius));  //lEye
    circles.push(new Circle(head_centroid_6.x,head_centroid_6.y+15 , circleRadius+3)); //nose
	//-------------------------------------------------------------!ADD-NEW-CIRCLE
    circles.push(new Circle(head_centroid_6.x-25,head_centroid_6.y-25 , circleRadius+3));	  //lEar
    circles.push(new Circle(head_centroid_6.x-10,head_centroid_6.y , circleRadius+3));     //rEar
    circles.push(new Circle(head_centroid_6.x+10,head_centroid_6.y , circleRadius));   //rEye
    circles.push(new Circle(head_centroid_6.x+25,head_centroid_6.y-25 , circleRadius));  //lEye
    circles.push(new Circle(head_centroid_6.x,head_centroid_6.y+15 , circleRadius+3)); //nose
	//-------------------------------------------------------------!ADD-NEW-CIRCLE
    circles.push(new Circle(head_centroid_6.x-25,head_centroid_6.y-25 , circleRadius+3));	  //lEar
    circles.push(new Circle(head_centroid_6.x-10,head_centroid_6.y , circleRadius+3));     //rEar
    circles.push(new Circle(head_centroid_6.x+10,head_centroid_6.y , circleRadius));   //rEye
    circles.push(new Circle(head_centroid_6.x+25,head_centroid_6.y-25 , circleRadius));  //lEye
    circles.push(new Circle(head_centroid_6.x,head_centroid_6.y+15 , circleRadius+3)); //nose
	//-------------------------------------------------------------!ADD-NEW-CIRCLE	

    // load the guide sprite image
    buttonImage = new Image();
    buttonImage.src = 'images/button.png';
    buttonImage.onload = function() {
    }
    button = new Button(50, 450, 180, 120, 'normal', buttonImage);

    // binding mousedown event (for dragging)
    $('#scene').mousedown(function(e) {

        var mouseX = e.layerX || 0;
        var mouseY = e.layerY || 0;
        for (var i=0; i<circles.length; i++) { // checking through all circles - are mouse down inside circle or not
            var circleX = circles[i].x;
            var circleY = circles[i].y;
            var radius = circles[i].radius;
            if (Math.pow(mouseX-circleX,2) + Math.pow(mouseY-circleY,2) < Math.pow(radius,2)) {
                selectedCircle = i;
                break;
            }
        }

        // button behavior
        if (mouseX > button.x && mouseX < button.x+button.w && mouseY > button.y && mouseY < button.y+button.h) {
            button.state = 'pressed';
            button.imageShift = 262;
        }
    });

    $('#scene').mousemove(function(e) { // binding mousemove event for dragging selected circle
        var mouseX = e.layerX || 0;
        var mouseY = e.layerY || 0;
        if (selectedCircle != undefined) {
            // var canvasPosition = $(this).offset();

            var radius = circles[selectedCircle].radius;
            circles[selectedCircle] = new Circle(mouseX, mouseY,radius); // changing position of selected circle
        }

        hoveredCircle = undefined;
        for (var i=0; i<circles.length; i++) { // checking through all circles - are mouse down inside circle or not
            var circleX = circles[i].x;
            var circleY = circles[i].y;
            var radius = circles[i].radius;

            if (Math.pow(mouseX-circleX,2) + Math.pow(mouseY-circleY,2) < Math.pow(radius,2)) {
                hoveredCircle = i;
                circles[hoveredCircle] = new Circle(circleX, circleY, 25);
                break;
            }
        }

        // button behavior
        if (button.state != 'pressed') {
            button.state = 'normal';
            button.imageShift = 0;
            if (mouseX > button.x && mouseX < button.x+button.w && mouseY > button.y && mouseY < button.y+button.h) {
                button.state = 'hover';
                button.imageShift = 131;
            }
        }
    });

    $('#scene').mouseup(function(e) { // on mouseup - cleaning selectedCircle
        selectedCircle = undefined;

        // button behavior
        if (button.state == 'pressed') {
            moving = !moving;
        }
        button.state = 'normal';
        button.imageShift = 0;
    });

    setInterval(drawScene, 30); // loop drawScene
});