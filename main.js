song1 = "";
song2 = "";
leftWristX  = 0;
leftWristY = 0;
rightWristX  = 0;
rightWristY = 0;

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music.mp3");
}

function setup()
{
    canvas  = createCanvas(600 , 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = m5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function gotPoses(results)
{
if (results,lenght > 0)
{
    console,log(results);
    leftWristX = resuts[0].pose.leftWrist.x;
    leftWristY = resuts[0].pose.leftWrist.y;
    console.log("leftWristX  = " + leftWristX +"leftWristY = " + leftWristY );

    rightWristX = resuts[0].pose.rightWrist.x;
    rightWristY = resuts[0].pose.rightWrist.y;
    console.log("rightWristX  = " + rightWristX +"rightWristY = " + rightWristY );

}

}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function draw()
{
    image(video ,  0 , 0 , 600 , 500);
}

function song_name()
{
    song.play();
    song.setVolume(1);
    song.rate(1);

}


