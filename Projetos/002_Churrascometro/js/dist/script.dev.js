"use strict";

//Carne ==> 400g por pessoa | se durar mais 6 horas ==> 650g por pessoa
//Cerveja ==> 1200ml por pessoa | se durar mais 6 horas 6 horas ==> 2000ml por pessoa
//Refrigerante/agua ==> 1000ml por pessoa |  se durar mais 6 horas 6 horas ==> 1500ml por pessoa
//Crianças valem por 0,5 pessoa
window.onload();
var inputAdultos = document.getElementById("adultos")[0];
var inputCriancas = document.getElementById("criancas")[0];
var inputDuracao = document.getElementById("duracao")[0];
var resultado = document.getElementById("resultado");

function Calcular() {
  var numeroAdultos = inputAdultos.value;
  var numeroCriancas = inputCriancas.value;
  var valorDuracao = inputDuracao.value;
  var quantidadeDeCarne = CarnePorPessoa(valorDuracao) * numeroAdultos + CarnePorPessoa(valorDuracao) / 2 * numeroCriancas;
  var quantidadeDeCerveja = CervejaPorPessoa(valorDuracao) * numeroAdultos;
  var quantidadeDeBebidas = BebidasPorPessoa(valorDuracao) * numeroAdultos + BebidasPorPessoa(valorDuracao) / 2 * numeroCriancas;
  console.log(quantidadeDeBebidas);
  resultado.innerHTML = '<p>${quantidadeDeCarne / 1000}Kg de Carne </p>';
  resultado.innerHTML += '<p>${quantidadeDeCerveja / 1000}L de Cerveja </p>';
  resultado.innerHTML += '<p>${quantidadeDeBebidas / 1000}L de Bebidas </p>';
}

function CarnePorPessoa(duracao) {
  var carne = 400;

  if (duracao >= 6) {
    carne = 650;
  }

  return carne;
}

function CervejaPorPessoa(duracao) {
  var cerveja = 1200;

  if (duracao >= 6) {
    cerveja = 2000;
  }

  return cerveja;
}

function BebidasPorPessoa(duracao) {
  var cerveja = 1000;

  if (duracao >= 6) {
    cerveja = 1500;
  }

  return cerveja;
}