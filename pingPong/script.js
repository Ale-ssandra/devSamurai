
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      const lineWidth = 15

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

// desenho da linha do campo
        ctx.fillStyle = ("#fff")
       const x = window.innerWidth / 2 - lineWidth / 2
       const y = 0
       const w = lineWidth
       const h = window.innerHeight

       ctx.fillRect(x, y , w , h)


//desenhando raquete esquerda  
        ctx.fillRect(10,400 , lineWidth , 200)


 // desenhando raquete direita
       ctx.fillRect(window.innerWidth - lineWidth - 10, 220, lineWidth, 200)        
      }

      setup()
      draw()
   