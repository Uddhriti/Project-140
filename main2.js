function preload(){
    sound1 = loadSound("missed.wav");
    sound2 = loadSound("ball_touch_paddel.wav");
}
function setup(){
    canvas = createCanavas(1240,600);
    canvas.parent('canvas');

    video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded(){
	console.log("Model Loaded.")
}
function gotPoses(results){
	if(results.length > 0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("Nose X = " + noseX + " " + "Nose Y = " + noseY);
	}
}
function draw() {
	game()

}