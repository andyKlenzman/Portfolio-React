import React from "react";
import { useRef, useEffect } from "react";

const Animation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext("2d");
      window.onresize = function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      const blobObj = {
        width: canvas.width,
        height: canvas.height,
        maxColor: 20,
        minColor: 0,
        rad: 50,
        bgColor: "#1C1C1C",
        bgSat: "100%",
        bgLight: "15%",
        speedXMult: 1,
        speedX: 0,
        opacity: 0.5,
      };
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = blobObj.bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      BlobMovement(ctx, blobObj);
      requestAnimationFrame(render);
    };
    render();
  }, []);

  return (
    
        <canvas ref={canvasRef} style={{ zIndex: -1, position: "absolute", width: "100%", display:"flex", justifyContent: "center"}} />
    

  );
};

export default Animation;

let init = true;
let effect;
export function BlobMovement(ctx, blobObj) {
  if (init) {
    effect = new MetaBlobEffect(blobObj);
    //determine number of blobs to init based on screen size
    for (var i = 0; i < blobObj.width/200; i++) {
        effect.init(25);


    }
    
    init = false;
  }

  effect.update();
  effect.draw(ctx);
}

class MetaBlobEffect {
  constructor(blob) {
    const {
      width,
      height,
      maxColor,
      minColor,
      rad,
      speedXMult,
      speedX,
      opacity,
    } = blob;
    this.width = width;
    this.opacity = opacity;
    this.height = height;
    this.maxColor = maxColor;
    this.minColor = minColor;
    this.rad = rad;
    this.speedX = speedX;
    this.speedXMult = speedXMult;

    this.metaballsArray = [];
  }
  init(numberOfBalls) {
    for (let i = 0; i < numberOfBalls; i++) {
      this.metaballsArray.push(new Blob(this));
    }
  }
  update(blobObj) {
    this.metaballsArray.forEach((metaball) => metaball.update());
  }
  draw(ctx, blobObj) {
    this.metaballsArray.forEach((metaball) => metaball.draw(ctx));
  }
}

class Blob {
  constructor(effect) {
    this.effect = effect;
    this.opacity = this.effect.opacity;
    this.x = this.effect.width * Math.random();
    this.y = this.effect.height * (Math.random() * (0.9 - 0.1) - 0.1);
    this.rad = Math.random() * this.effect.rad ;
    this.speedX = 0;
    this.speedY = Math.random() * 1;
    this.angle = 0;
    this.va = Math.random() * 0.1 - 0.05;
    this.range = Math.random() * 20;

    if (this.speedY >= 0.8) {
      this.color = `hsla(301,76%,62%,${this.opacity} )`;
    }
    if (this.speedY < 0.8 && this.speedY >= 0.6) {
      this.color = `hsla(301,76%,42%,${this.opacity} )`;
    }
    if (this.speedY < 0.6) {
      this.color = `hsla(301,76%,22%,${this.opacity} )`;
    }
  }

  update() {
    if (this.y > this.effect.height + this.rad) {
      this.x = Math.random() * window.innerWidth;
      this.y = 0 - this.rad;
    }

    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;

    ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);

    ctx.fill();
  }
}
