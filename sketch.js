let unicorn;
let uImg;
let tImg;
let bImg;
let trains = [];
let soundClassifier;

//Pphp -S localhost:8080

function preload() {
	const options = { probabilityThreshold: 0.95};
	soundClassifier = ml5.soundClassifier('SpeechCommands18w', options)
	uImg = loadImage('http://localhost:8080/unicorn.png');
	tImg = loadImage('http://localhost:8080/fiji.png');
	bImg = loadImage('http://localhost:8080/background.png');

}
function mousePressed() {
	trains.push(new Train());
}
function setup() {
	createCanvas(600, 450);
	unicorn = new Unicorn();
	soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
	if (error) {
		console.error(error);
	}
	console.log(results[0].label, results[0].confidence);
	if (results[0].label == 'up') {
		unicorn.jump();
	}
}

function keyPressed() {
	if (key == ' ') {
		unicorn.jump();
	}
}

function draw() {
	if (random(1) < 0.005) {
		trains.push(new Train());
	}

	background(bImg);

	for (let t of trains) {
		t.move();
		t.show();
		if (unicorn.hits(t)) {
			console.log('game over');
			noLoop();
		}
	}
	unicorn.show();
	unicorn.move();

}
