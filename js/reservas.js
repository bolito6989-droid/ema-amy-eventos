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

window.open(`https://wa.me/593988038813?text=Hola quiero reservar un evento el ${reserva.fecha}`);

alert("Reserva guardada");

});