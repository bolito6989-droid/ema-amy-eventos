const pCanvas=document.getElementById("particles");

const pCtx=pCanvas.getContext("2d");

pCanvas.width=window.innerWidth;
pCanvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<100;i++){

particles.push({
x:Math.random()*pCanvas.width,
y:Math.random()*pCanvas.height,
r:2
});

}

function animate(){

pCtx.clearRect(0,0,pCanvas.width,pCanvas.height);

particles.forEach(p=>{

pCtx.beginPath();
pCtx.arc(p.x,p.y,p.r,0,Math.PI*2);
pCtx.fillStyle="white";
pCtx.fill();

p.y+=0.3;

if(p.y>pCanvas.height){
p.y=0;
}

});

requestAnimationFrame(animate);

}

animate();