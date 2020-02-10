import { Component, ElementRef, ViewChild } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import anime from 'animejs/lib/anime';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  isOpen = false;
  iloveyouMsg="\u2665 \u2665 \u2665 \u2665 \u2665 \u2665 \u2665 \u2665 \u2665 \u2665 \u2665 \u2665 \u2665 \u2665 \u2665 \u2665 \u2665 \u2665 \u2665 \u2665 \u2665 \u2665";
  ngOnInit() {
    var canvas = document.getElementById('stage') as HTMLCanvasElement;;
    if (canvas.getContext) {
      var context = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var no = 25;
      var hearts = [];
      for (var i = 0; i < no; i++) {
        var color = 360 * Math.random();
        var x = Math.floor(canvas.width * Math.random());
        var y = Math.floor(canvas.height * Math.random());
        hearts[i] = new heart(x, y, color);
      }
      function heart(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;

        this.fall = function () {
          if (this.x >= innerWidth) {
            this.x -= 16;
          }
          if (this.x <= 0) {
            this.x += 16;
          }
          var dir = Math.floor(Math.random() * 3);
          if (dir == 0) {
            this.x = this.x;
          }
          if (dir == 1) {
            this.x = this.x - 1;
          }
          if (dir == 2) {
            this.x = this.x + 1;
          }
          this.y = this.y + 1;
          if (this.y > canvas.height) {
            this.y = -10;
          }
        }
        this.show = function () {
          context.beginPath();
          context.arc(this.x, this.y, 7, 0, Math.PI, false);
          context.strokeStyle = "hsl(" + color + ",100%,50%)";
          context.lineWidth = 14;
          context.lineCap = "round";
          context.stroke();
          context.closePath();
        }
      }
      function draw() {
        context.fillStyle = "#000";
        context.fillRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < no; i++) {
          hearts[i].show();
          hearts[i].fall();
        }
      }
      function update() {
        draw();
        window.requestAnimationFrame(update);
      }
      update();
    }
  
    // Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 80*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  }

   iLoveYou() {
    console.log("\u0049 \u2665 \u0055");
    this.iLoveYou();
}

}
