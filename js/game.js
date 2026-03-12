let score=0;

function startGame(){

const area=document.getElementById("gameArea");

setInterval(()=>{

let balloon=document.createElement("div");

balloon.className="balloonGame";

balloon.style.left=Math.random()*300+"px";
balloon.style.top=Math.random()*200+"px";

balloon.onclick=()=>{

score++;

document.getElementById("score").innerText=score;

balloon.remove();

};

area.appendChild(balloon);

setTimeout(()=>balloon.remove(),2000);

},1000);

}