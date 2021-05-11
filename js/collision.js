const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let mouse = {
    x:innerWidth /2,
    y:innerWidth /2
}
addEventListener('mousemove',function(e){
    mouse.x = e.clientX;
    mouse.y = e.clientY
})
 
function getDistance(x1,y1,x2,y2){ 
    var xDist = x2 - x1;
    var yDist = y2 - y1;
    return Math.hypot(xDist, yDist);
  }
class Circle {
    constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    // this.update = function(){
    //     this.draw();
    // }
    };
    draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        c.fillStyle = this.color
        c.fill()
        c.closePath();
    };
}



let circles;
function randomNumberFromRange(min,max){
    return radius = Math.random() * (max - min) + min;
}

function formRandomColor() {
    let r = randomNumberFromRange(0, 255);
    let g = randomNumberFromRange(0, 255);
    let b = randomNumberFromRange(0, 255);  
    return `rgb(${r}, ${g}, ${b})`;
}


function randomPositionCircle(){
    var coordinates = {}
    coordinates.x = Math.random() * innerWidth
    coordinates.y = Math.random() * innerHeight
    console.log(coordinates)
    return coordinates
    
}
function init(){
    circles = []
    for (let i = 0; i < 800; i++ ){
        positionCoordinate = randomPositionCircle()
        x = positionCoordinate.x
        y = positionCoordinate.y
        var radius = randomNumberFromRange(5,15)
        var color = formRandomColor();
        circles.push(new Circle(x,y,radius,color));
    }
    // console.log(circles)   
}

function animate() {
    requestAnimationFrame(animate);
    circles.forEach(function(circle){
        circle.draw()
    })
    // c.clearRect(0, 0, canvas.width, canvas.height);
    // circle1.draw();
    // circle2.x = mouse.x
    // circle2.y = mouse.y
    // circle2.draw();
    // if (getDistance(circle1.x,circle1.y,circle2.x,circle2.y)<circle1.radius+circle2.radius){
    //     circle1.color = 'yellow'
    // }
    // else{
    //     circle1.color = 'black'
    // }
}
init()
animate()

