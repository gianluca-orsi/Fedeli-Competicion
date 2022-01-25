$("i").addClass("hvr-grow");
$(".temporizador").addClass("is-inline-block");

/* Temporizador prox carrera autos */
var proxFechaAutos = new Date ("Mar 6, 2022, 00:00:00").getTime();
var funcionAutos = setInterval(function(){
    var tiempoActual = new Date().getTime();
    var tiempoRestante = proxFechaAutos - tiempoActual;

    var diasRestantesAutos = Math.floor (tiempoRestante / (1000 * 60 * 60 *24));
    var horasRestantesAutos = Math.floor ((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutosRestantesAutos = Math.floor ((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));

    $("#diasAutos").html(diasRestantesAutos + " Dias");
    $("#horasAutos").html(horasRestantesAutos + " Horas");
    $("#minutosAutos").html(minutosRestantesAutos + " Minutos");

    if (tiempoRestante < 0) {
        clearInterval(funcionAutos)
        $("#diasAutos").html("");
        $("#horasAutos").html("HOY");
        $("#minutosAutos").html("");
    }
},1000)

/* Temporizador prox carrera kart */
var proxFechaKart = new Date ("Mar 22, 2022, 00:00:00").getTime();
var funcionKart = setInterval(function(){
    var tiempoActual = new Date().getTime();
    var tiempoRestanteKart = proxFechaKart - tiempoActual;

    var diasRestantesKart = Math.floor (tiempoRestanteKart / (1000 * 60 * 60 *24));
    var horasRestantesKart = Math.floor ((tiempoRestanteKart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutosRestantesKart = Math.floor ((tiempoRestanteKart % (1000 * 60 * 60)) / (1000 * 60));

    $("#diasKart").html(diasRestantesKart + " Dias");
    $("#horasKart").html(horasRestantesKart + " Horas");
    $("#minutosKart").html(minutosRestantesKart + " Minutos");

    if (tiempoRestanteKart < 0) {
        clearInterval(funcionKart)
        $("#diasKart").html("");
        $("#horasKart").html("HOY");
        $("#minutosKart").html("");
    }
},1000)
