var apple=0;  
function setup() {
createCanvas(500, 500); 
}

function draw() {
background(100,216,230); 
stroke(255,255,127);
strokeWeight(10);
fill(255,255,127,200); 
ellipse(mouseX,mouseY,apple,apple);
apple=apple+5; 
fill(80,mouseX,103,255);
stroke(123,250,189);
strokeWeight(5);
rect(apple,mouseX,apple,mouseY);
fill(239,22,182,255);

}


