var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var trPacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < trPacientes.length; i++) {

    var trPaciente = trPacientes[i];

    var tdPeso = trPaciente.querySelector(".info-peso");
    var tdAltura = trPaciente.querySelector(".info-altura");
    var tdImc = trPaciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        trPaciente.classList.add("paciente-invalido");
        tdPeso.classList.add("peso-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false
        trPaciente.classList.add("paciente-invalido");
        tdAltura.classList.add("altura-invalida");
  
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = (peso / (altura * altura));
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}

titulo.addEventListener("click", mostraMensagem)
function mostraMensagem() {
    console.log("Olá eu fui clicado!");
}

var botãoAdicionar = document.querySelector("#adicionar-paciente");
botãoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    //console.log ("Oi, cliquei no botão");
    var form = document.querySelector("#form-adiciona");
var nome = form.nom.value;
var peso = form.peso.value;
var altura = form.altura.value;
var gordura = form.gordura.value;

var paciente = document.createElement ("tr");

var nometd = document.createElement ("td");
var pesotd = document.createElement ("td");
var alturatd = document.createElement ("td");
var gorduratd = document.createElement ("td");
var imctd = document.createElement ("td");

nometd.textContent = nome;
pesotd.textContent = peso;
altura.textContent = altura;
gorduratd.textContent = gordura;

var tabela = document.querySelector ("#tabela-pacientes");

tabela.appendChild (pacientetr)
});
