function preload(){
    
}

function setup(){
canvas=createCanvas(300, 300,);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}

function take_snapshot(){
save('mustash.jpg');
}


function draw(){
image(video, 0, 0, 300, 300);
}