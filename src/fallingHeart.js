var canvas=document.querySelector("canvas");
var context=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var no = prompt("Enter your favourite number","20");
var hearts=[];
for(var i=0;i<no;i++){
var color=360*Math.random();
var x=Math.floor(canvas.width*Math.random());
var y=Math.floor(canvas.height*Math.random());
hearts[i]=new heart(x,y,color);
}
function heart(x,y,color){
this.x=x;
this.y=y;
this.color=color;

this.fall=function(){
if(this.x>=innerWidth){
    this.x-=16;
}
if(this.x<=0){
    this.x+=16;
}
var dir=Math.floor(Math.random()*3);
if(dir==0){
this.x=this.x;
}
if(dir==1){
this.x=this.x-1;
}
if(dir==2){
this.x=this.x+1;
}
this.y=this.y+1;
if(this.y>canvas.height){
this.y=-10;
}
}
this.show=function(){
context.beginPath(); 
context.arc(this.x,this.y,7,0,Math.PI,false);
context.strokeStyle="hsl("+color+",100%,50%)";
context.lineWidth=14;
context.lineCap="round";       
context.stroke();       
context.closePath();
}
}
function draw(){
context.fillStyle="#000";
context.fillRect(0,0,canvas.width,canvas.height);
for(var i=0;i<no;i++){
hearts[i].show();
hearts[i].fall();
}
}
function update(){
draw();
window.requestAnimationFrame(update);
}
update();