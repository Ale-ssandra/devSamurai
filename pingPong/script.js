
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      function setup() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.height = window.innerHeight;
        ctx.width = window.innerWidth;
      }

    //   (a , b, c, d) AeB sao as posicoes de onde ficara o elemento  e CeD o tamanho do elemento
      function draw() {
        ctx.fillStyle = ("green");
        ctx.fillRect(0,0, window.innerWidth, window.innerHeight);
      }

      setup()
      draw()
   