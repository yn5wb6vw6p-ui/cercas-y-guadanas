setTimeout(() => {

document.getElementById("splash").style.display="none";

document.getElementById("app").classList.remove("oculto");

},1500);

function abrirGuadanas(){

window.location.href="Pages/guadanas.html";

}

function abrirCercas(){

window.location.href="Pages/cercas.html";

}

function abrirPDF(){

window.location.href="pdf/ListaPrecios.pdf";

}

function abrirInfo(){

window.location.href="pages/informacion.html";

}

if('serviceWorker' in navigator){

navigator.serviceWorker.register('service-worker.js');

}