canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
roverwidth = 100;
roverheight = 90;
roverX = 10;
roverY = 10;
i = Math.floor(Math.random() * 4)
changebackground = ["mars1.jpeg", "mars2.jpg", "mars3.jpg", "mars4.jpg", "mars.jpg"];
backgroundImage = changebackground[i];
roverImage = "rover.png";
function add() {
    backgroundImageTag = new Image(); //defining a variable with new image
    backgroundImageTag.onload = uploadBackground; //setting a function, onloading this variable
    backgroundImageTag.src = backgroundImage; //load image

    roverImageTag = new Image();
    roverImageTag.onload = uploadRover;
    roverImageTag.src = roverImage;
}

function uploadBackground() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverImageTag, roverX, roverY, roverwidth, roverheight);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '38') {
        console.log("up");
        up();
    }
    if(keypressed == '40') {
        console.log("down");
        down();
    }
    if(keypressed == '37') {
        console.log("left");
        left();
    }
    if(keypressed == '39') {
        console.log("right");
        right();
    }
}
function up() {
    if(roverY > 0) {
        roverY -= 10;
        console.log("x = " + roverX + " , y= " + roverY);
        uploadBackground();
        uploadRover();
    }
}
function down() {
    if(roverY <=510) {
        roverY += 10;
        console.log("x = " + roverX + " , y= " + roverY);
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if(roverX <=700) {
        roverX += 10;
        console.log("x = " + roverX + " , y= " + roverY);
        uploadBackground();
        uploadRover();
    }
}
function left() {
    if(roverX > 0) {
        roverX -= 10;
        console.log("x = " + roverX + " , y= " + roverY);
        uploadBackground();
        uploadRover();
    }
}