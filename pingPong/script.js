const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = 15;

//objeto é importante para delegar propriedades , nao compartilhando tudo com os outros objetos
// nesse objeto campo defini alguams propriedades que seia como caracteristicas e a funçao de desenhar o campo
// seria as acoes a serem tomadas. Tudo isso para ter especificiadades para aquele objeto.
const campo = {
  w: window.innerWidth,
  h: window.innerHeight,
  draw: function () {
    // desenho do campo
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, this.w, this.h);
  },
};
const line = {
  w: lineWidth,
  h: campo.h,
  draw: function () {
    ctx.fillStyle = "#fff";
    const x = window.innerWidth / 2 - this.w / 2;
    const y = 0;
    const w = lineWidth;
    const h = window.innerHeight;

    ctx.fillRect(x, y, w, h);
  },
};
const raqueteEsquerda = {
  x: 10,
  y: 400,
  w: lineWidth,
  h: 200,
  draw: function () {
    ctx.fillRect(this.x, this.y, this.w, this.h);
  },
};


const raqueteDireita = {}

function setup() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.height = window.innerHeight;
  ctx.width = window.innerWidth;
}

function draw() {
  campo.draw();
  line.draw();
  raqueteEsquerda.draw();


  // desenhando raquete direita
  ctx.fillRect(window.innerWidth - lineWidth - 10, 220, lineWidth, 200);

  // desenhando a bolinha
  ctx.beginPath();
  ctx.arc(200, 500, 20, 0, 2 * Math.PI, false);
  ctx.fill();

  // Dessenho do placar
  ctx.font = " bold 60px  arial ";
  ctx.textAling = "center";
  ctx.textBaseline = "top";
  ctx.fillStyle = "#0f4e0f";
  ctx.fillText("3", window.innerWidth / 4, 50);
  ctx.fillText("5", window.innerWidth / 4 + window.innerWidth / 2, 50);
}

setup();
draw();

// desafio para mim, tentar tranformar os outros elementos em objetos
