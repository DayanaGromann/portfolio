var cnv = document.querySelector('canvas');
var ctx = cnv.getContext('2d');
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;


var gravity = 0.1;
i = 0;
var catX = catY = hyp= 0;

var ball = {
	radius: 40,
	vx: Math.floor(Math.random() * 10) + 1,
	vy: Math.floor(Math.random() * 10) + 1,
	x: Math.floor(Math.random() * canvas.width) + 1,
	y: 0,
	color: ["magenta", "deeppink", "Orchid", "MediumVioletRed", "Plum"],
	held: false //se a bola esta sendo segurada ou solta
};

cnv.addEventListener('mousedown', function (e) {

	

	catX = ball.x - e.offsetX;
	catY = ball.y - e.offsetY;
	hyp = Math.sqrt(catX * catX + catY * catY);
	if (hyp < ball.radius && !ball.held) {
		ball.held = true;
    }
}, false);

cnv.addEventListener('mouseup', function (e) {
	

	ball.held = false;
	ball.vx = (Math.random() * 10) + 1;
}, false);

cnv.addEventListener('mousemove', function (e) {
	if (ball.held) {
		ball.x = e.offsetX;
		ball.y = e.offsetY;
    }
}, false);

function loop() {
	window.requestAnimationFrame(loop, 1000);
	update();
	render();
}

function update() {

	


	if (!ball.held) {
		ball.vy += gravity;
		ball.y += ball.vy;
		ball.x += ball.vx;
	} else {
		ball.vy = 0;
		ball.vx = 0;
	}

	//fazer quicar no ch�o e teto

	if (ball.y - ball.radius < 0 || ball.y + ball.radius > cnv.height) {
		ball.y = ball.y - ball.radius < 0 ? ball.radius : cnv.height - ball.radius;
		ball.vy *= -0.8;
		i++;
	}
	
	//fazer quicar nas paredes
	if (ball.x - ball.radius < 0 || ball.x + ball.radius > cnv.width) {
		ball.x = ball.x - ball.radius < 0 ? ball.radius : cnv.width - ball.radius;
		ball.vx *= -0.8;
		i++
	}

	if (i > 4) {
		i = 0;
    }
	
	
}

function render() {


	

		ctx.clearRect(0, 0, cnv.width, cnv.height);

		ctx.fillStyle = ball.color[i];
		ctx.beginPath();
		ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fill();



		ctx.strokeText("Bem vindo", cnv.width / 2, cnv.height / 2 - 50);
		ctx.strokeText(" \u200D\u2764\uFE0F\u200D ", cnv.width / 2, cnv.height / 2);
		ctx.strokeStyle = ball.color[i];;
		ctx.font = '40px Mali Cursive';
		ctx.textAlign = "center";
	

};



loop();