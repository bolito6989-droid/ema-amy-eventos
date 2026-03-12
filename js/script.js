/* contador */

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


/* calendario */

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


/* IA fiesta */

function planificar(){

const invitados=document.getElementById("invitados").value;

let r="";

if(invitados<=10){

r="Animación básica";

}else if(invitados<=25){

r="Animación completa";

}else{

r="Animación premium + DJ";

}

document.getElementById("plan").innerText=r;

}