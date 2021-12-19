function preload()
{

}

function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNET=ml5.poseNet(video,modelLoaded);
poseNET.on('pose',gotposes);
}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }
}

function modelLoaded()
{
    console.log("ModelLoaded!");
}

function draw()
{
image(video,0,0,300,300);
}

function take_snapshot()
{
    save('desmondog.png')
}