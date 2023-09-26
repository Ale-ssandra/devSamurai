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

const raqueteDireita = {
  x: window.innerWidth - lineWidth - 10,
  y: 200,
  w: line.w,
  h: 200,
  draw: function () {
    ctx.fillRect(this.x, this.y, this.w, this.h);
  },
};
const placar = {
  humano: 1,
  computador: 2,
  draw: function () {
    ctx.font = " bold 60px  arial ";
    ctx.textAling = "center";
    ctx.textBaseline = "top";
    ctx.fillStyle = "#0f4e0f";
    ctx.fillText(this.humano, campo.w / 4, 50);
    ctx.fillText(this.computador, campo.w/ 4 + campo.w / 2, 50);
  },
};

const bola = {
  x: 400,
  y: 200,
  r: 20,
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#fff";
    ctx.fill();
    // fill serve para d desenhar a bola p[or isso tem definir uma cor antes se nao ela pega de outro lugar
  },
};

function setup() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.height = window.innerHeight;
  ctx.width = window.innerWidth;
}


// essa funçao esta chamando todos os draw para um unico lugar e obj de cada elemento é r4esponsavel por cada regra de cada um elemento
function draw() {
  campo.draw();
  line.draw();
  raqueteEsquerda.draw();
  raqueteDireita.draw();
  placar.draw();
  bola.draw();

setup();
draw();

// desafio para mim, tentar tranformar os outros elementos em objetos
