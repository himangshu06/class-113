function preload(){

}

function setup(){
    canvas = createCanvas(700,400);
    canvas.position(150,275);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw(){
    image(video,0,0,700,400);
    tint(tint_color);
}

function take_snapshot(){
    save("student_filter.png");
}
function filter_tint(){
    tint_color = document.getElementById("filter_input").value;
}

