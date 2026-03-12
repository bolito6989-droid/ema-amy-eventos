document.getElementById("formReserva").addEventListener("submit",function(e){

e.preventDefault();

const reserva={

nombre:document.getElementById("nombre").value,

telefono:document.getElementById("telefono").value,

fecha:document.getElementById("fecha").value,

servicio:document.getElementById("servicio").value

};

let reservas=JSON.parse(localStorage.getItem("reservas"))||[];

reservas.push(reserva);

localStorage.setItem("reservas",JSON.stringify(reservas));

const telefono="593988038813";

const mensaje=`Hola quiero reservar un evento el ${reserva.fecha}`;

window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`);

alert("Reserva guardada");

});