const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = 15;
const mouse = { x: 0, y: 0 };

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
  y: 0,
  w: lineWidth,
  h: 200,
  _move: function () {
    this.y = mouse.y - this.h / 2;
  },
  draw: function () {
    ctx.fillRect(this.x, this.y, this.w, this.h);

    this._move();
  },
};

const raqueteDireita = {
  x: window.innerWidth - lineWidth - 10,
  y: 200,
  w: line.w,
  h: 200,
  _move: function () {
    this.y = bola.y;
  },
  draw: function () {
    ctx.fillRect(this.x, this.y, this.w, this.h);
    this._move();
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
    ctx.fillText(this.computador, campo.w / 4 + campo.w / 2, 50);
  },
};

const bola = {
  x: 0,
  y: 0,
  r: 20,
  speed: 5,
  directionX: 1,
  directionY: 1,
  _calcPosition: function () {
    if(this.x > campo.w){
      if(this.y + this.r > raqueteDireita && this.y + this.r < raqueteDireita + raqueteEsquerda){
        this.reverseX()
      }
    }
// termina ver video amanha , pasanado mal hj










    if ((this.y - this.r < 0 && this.directionY < 0) ||
    (this.y > campo.h - this.r)) {
      this.reverseY();
    }
  },
// essa parte recalcula o eixto da bola
  reverseX: function () {
    this.directionX *= -1;
  },
  reverseY: function () {
    // 1 * -1 = -1
    // -1 * _1 = 1
    this.directionY *= -1;
  },

  _move: function () {
    this.x += this.directionX * this.speed;
    this.y += this.directionY * this.speed;
  },

  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#fff";
    ctx.fill();
    // fill serve para d desenhar a bola p[or isso tem definir uma cor antes se nao ela pega de outro lu]
    this._move();
    this._calcPosition();
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
}

window.animateFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    }
  );
})();
function main() {
  animateFrame(main);
  draw();
}
setup();
main();

canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.pageX;
  mouse.y = e.pageY;
});
