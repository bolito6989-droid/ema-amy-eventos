const canvas=document.getElementById("balloons");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let balloons=[];

for(let i=0;i<15;i++){

balloons.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:20
});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

balloons.forEach(b=>{

ctx.beginPath();
ctx.arc(b.x,b.y,b.r,0,Math.PI*2);
ctx.fillStyle="rgba(255,100,150,0.6)";
ctx.fill();

b.y-=0.5;

if(b.y<0){
b.y=canvas.height;
}

});

requestAnimationFrame(draw);

}

draw();