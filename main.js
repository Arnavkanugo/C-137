video="";
status1="";
objects=[];
 
function draw(){
    image(video,0,0,480,380);
if(status1!=""){
    objectDetector.detect(video,gotResults);
    for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="status:objectsDetected";
document.getElementById("number_of_object").innerHTML="number_of_objects_detected_are: "+objects.length;
fill("#B3C750");
percent=floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
noFill();
stroke("#D13E0D");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

    }
}

}
function setup(){
canvas=createCanvas(300,300);
canvas.center();

}
function preload(){
video=createVideo('video.mp4');
video.hide();
}
function start(){
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status:Detecting objects";
}
function modelLoaded(){
    console.log("modelLoaded");
    status1=true;
    video.loop();
    video.speed(1);
    video.volume(1);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
console.log(results);
objects=results;

}














