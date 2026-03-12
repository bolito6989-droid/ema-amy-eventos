let reservas=JSON.parse(localStorage.getItem("reservas"))||[];

const tabla=document.getElementById("tablaReservas");

reservas.forEach(r=>{

const fila=document.createElement("tr");

fila.innerHTML=`

<td>${r.nombre}</td>
<td>${r.telefono}</td>
<td>${r.fecha}</td>
<td>${r.servicio}</td>

`;

tabla.appendChild(fila);

});