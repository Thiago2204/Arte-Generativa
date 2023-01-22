// depois de pesquisas e inspiracoes a intencao foi simular a infeccao do fungo Cordyceps do jogo The last of Us onde a cada "play" o fungo vai se multiplicar de um jeito diferente


// cores primarias do projeto
var cor1 = [200, 255, 255];
var cor2 = [0, 0, 30]; 


//tamanho e cores do background

function setup() {
	var tamanho = 1000;
	createCanvas(tamanho, tamanho);
	background.apply(null, cor2);
	noLoop();
	stroke(255);
	angleMode(DEGREES);
  

}
// desenha no centro do canva 
function draw() {
	translate(width/2, height/2);
	rotate(180/2);
	branchComponent(100, 8, 50);
  

}
// funcao para criar caminhos aleatorios para a infeccao do fungo a partir de determinados angulos
  
// mudando os angulos tera caminhos diferentes do fungo

function branch(len, angle, gen) {
	line(0, 0, 0, -len);
	translate(0, -len);
	len *= 0.7;
	angle = random(angle-30, angle+20);
  


	if (len > 2) {
		push();
		rotate(angle);
		branch(len, angle, gen);
		pop();

		push();
		rotate(-angle);
		branch(len, angle, gen);
		pop();
	}
}

function branchComponent(len, amount, angle) {
	stroke.apply(null, cor1);
	var incrementadora = 720/amount;
	var fungo;
  
// rotaciona aleatoriamente 
  
	for (var i = 0; i < amount; i++) {
		push();
		fungo = -180 + incrementadora * i
		rotate(random(fungo - 180, fungo));
		branch(len, angle, 1);
		pop();
	}
}
