console.log("Javascript Loaded")

var MOVING_BINARY = 0;


// set up canvas
var canvas = document.getElementById("my-canvas");
var ctx = canvas.getContext("2d");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

var fps = 20;
objects = [];

function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
} 

class Number {
    constructor() {
        this.value = randomNumber(0,2);
        this.x = randomNumber(0,window.innerWidth);
        this.y = randomNumber(-100,window.innerHeight + 100);

        this.maxSpeed = 5
        this.speed = randomNumber(1,10);
        this.fontSize = 200 - ((20 - this.speed) * 10) + "px Arial";
        this.renderedFont = this.fontSize + "px Arial";
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height + 100) {
            this.y = -100;
            this.x = randomNumber(0,window.innerWidth);

            this.value = randomNumber(0,2);
            this.speed = randomNumber(1,10);
            this.fontSize = 200 - ((20 - this.speed) * 10) + "px Arial";
            this.renderedFont = this.fontSize + "px Arial";
        }
        this.draw();
    }

    draw() {
        ctx.font = this.renderedFont;
        ctx.fillText(this.value, this.x, this.y);
    }
}


for(let i = 0; i < 100; i++) {
    let number1 = new Number();
    objects.push(number1)
}

function addObjects() {
    for(let i = 0; i < 10; i++) {
        let number1 = new Number();
        objects.push(number1)
    }
}

function resetObjects() {
    objects = []
    for(let i = 0; i < 50; i++) {
        let number1 = new Number();
        objects.push(number1)
    }
}

function gameLoop() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let i = 0; i < objects.length; i++) {
        objects[i].update();
    }
    
}

setInterval(gameLoop, 1000 / fps);