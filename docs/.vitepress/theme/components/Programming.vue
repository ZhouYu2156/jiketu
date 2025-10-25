<script setup lang='ts'>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  var canvas = document.getElementById("canvas") as HTMLCanvasElement,
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D,
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight - document.getElementsByClassName('VPNav')[0].clientHeight),
    hue = 217,
    stars: any = [],
    count = 0,
    maxStars = 1000; //星星数量
  var canvas2 = document.createElement("canvas"),
    ctx2 = canvas2.getContext("2d") as CanvasRenderingContext2D;
  canvas2.width = 100;
  canvas2.height = 100;
  var half = canvas2.width / 2,
    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
  gradient2.addColorStop(0.025, "#CCC");
  gradient2.addColorStop(0.1, "hsl(" + hue + ", 61%, 33%)");
  gradient2.addColorStop(0.25, "hsl(" + hue + ", 64%, 6%)");
  gradient2.addColorStop(1, "transparent");
  ctx2.fillStyle = gradient2;
  ctx2.beginPath();
  ctx2.arc(half, half, half, 0, Math.PI * 2);
  ctx2.fill();
  // End cache
  function random(min: number, max?: number) {
    if (arguments.length < 2 || max === undefined) {
      max = min;
      min = 0;
    }
    if (min > max) {
      var hold = max;
      max = min;
      min = hold;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function maxOrbit(x: number, y: number) {
    var max = Math.max(x, y),
      diameter = Math.round(Math.sqrt(max * max + max * max));
    return diameter / 2;
    //星星移动范围，值越大范围越小，
  }
  class Star {
    orbitRadius: number;
    radius: number;
    orbitX: number;
    orbitY: number;
    timePassed: number;
    speed: number;
    alpha: number;

    constructor() {
      this.orbitRadius = random(maxOrbit(w, h));
      this.radius = random(60, this.orbitRadius) / 8;
      //星星大小
      this.orbitX = w / 2;
      this.orbitY = h / 2;
      this.timePassed = random(0, maxStars);
      this.speed = random(this.orbitRadius) / 500000;
      //星星移动速度
      this.alpha = random(2, 10) / 10;
      count++;
      stars[count] = this;
    }

    draw() {
      var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
        twinkle = random(10);
      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
      }
      ctx.globalAlpha = this.alpha;
      ctx.drawImage(
        canvas2,
        x - this.radius / 2,
        y - this.radius / 2,
        this.radius,
        this.radius
      );
      this.timePassed += this.speed;
    };
  };
  for (var i = 0; i < maxStars; i++) {
    new Star();
  }

  let animationId: number;

  function animation() {
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 0.5; //尾巴
    ctx.fillStyle = "hsla(" + hue + ", 64%, 6%, 2)";
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "lighter";
    for (var i = 1, l = stars.length; i < l; i++) {
      stars[i].draw();
    }
    animationId = window.requestAnimationFrame(animation);
  }
  animation();

  // 节流
  function throttle(fn: Function, wait: number = 200) {
    let timer: number | null = null;

    return function (this: any, ...args: any[]) {
      if (timer === null) {
        timer = window.setTimeout(() => {
          fn.apply(this, args);
          timer = null;
        }, wait);
      }
    };
  }

  let resizeTimer: number | null = null; window.addEventListener('resize', throttle(() => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight - document.getElementsByClassName('VPNav')[0].clientHeight;
    // 停止动画
    window.cancelAnimationFrame(animationId);
    // 清空数组
    stars = [];
    count = 0;
    // 重新创建星星
    for (var i = 0; i < maxStars; i++) {
      new Star();
    }
    animation()

  }), false);

  onUnmounted(() => {
    window.cancelAnimationFrame(animationId);
    window.removeEventListener('resize', resizeTimer as any, false);
    stars = [];
    count = 0;
  });
})
</script>

<template>
  <div class="programming-container">
    <canvas id="canvas">
      你的浏览器不支持canvas，请更换浏览器！
    </canvas>
  </div>
</template>

<style scoped lang='css'>
.programming-container {
  width: 100%;
  margin: 0;
  overflow: hidden;
}

canvas {
  display: block;
}
</style>