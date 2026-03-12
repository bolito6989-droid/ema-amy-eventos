/* CONTADOR */

const counters=document.querySelectorAll(".numero");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.getAttribute("data-target");

const c=+counter.innerText;

const inc=target/100;

if(c<target){

counter.innerText=Math.ceil(c+inc);

setTimeout(update,30);

}else{

counter.innerText=target;

}

};

update();

});


/* GLOBOS */

const canvas=document.getElementById("balloons");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let balloons=[];

for(let i=0;i<15;i++){

balloons.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:20+Math.random()*20

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

balloons.forEach(b=>{

ctx.beginPath();

ctx.arc(b.x,b.y,b.r,0,Math.PI*2);

ctx.fillStyle="rgba(255,120,200,0.7)";

ctx.fill();

b.y-=0.5;

if(b.y<0){

b.y=canvas.height;

}

});

requestAnimationFrame(draw);

}

draw();


/* CALENDARIO */

function verDisponibilidad(){

const fecha=document.getElementById("fechaEvento").value;

let reservas=JSON.parse(localStorage.getItem("reservas"))||[];

const ocupado=reservas.find(r=>r.fecha===fecha);

if(ocupado){

document.getElementById("estado").innerText="Fecha ocupada";

}else{

document.getElementById("estado").innerText="Fecha disponible";

}

}


/* IA FIESTA */

function planificar(){

const invitados=document.getElementById("invitados").value;

let r="";

if(invitados<=10){

r="Animación básica.";

}

else if(invitados<=25){

r="Animación completa.";

}

else{

r="Animación premium + DJ.";

}

document.getElementById("plan").innerText=r;

}