function preload(){


}
function draw(){
image(video,0,0,400,400);


if(status == true){
    r=random(255);
    g=random(255);
    b=random(255);
    for(counter=0; counter < objects.length; counter++){
        document.getElementById("status").innerHTML = "status:objects detected";
        fill(r,g,b);
        percent = floor(objects[counter].confidence*100);
        text(objects[counter].label+" "+percent+"%",objects[counter].x,objects[counter].y);
        noFill();
        stroke(r,g,b);
        rect(objects[counter].x,objects[counter].y,objects[counter].width,objects[counter].height);  
    }
}
}
function setup(){
 canvas= createCanvas(400,400);
 canvas.center();
 video=createCapture(VIDEO);
 video.hide();
 objectdetector = ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML = "status: dectecting objects"

}
img = "";
status = "";
objects=[];
function modelLoaded(){
    console.log("model loaded");
  status = true;
  objectdetector.detect(video,gotResult);
}
function gotResult(error,results){
    if(error==true){
        console.log(error);
    }
    
        console.log(results);
    objects=results;
}