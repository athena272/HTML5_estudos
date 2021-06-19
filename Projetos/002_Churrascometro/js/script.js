//Carne ==> 400g por pessoa | se durar mais 6 horas ==> 650g por pessoa

//Cerveja ==> 1200ml por pessoa | se durar mais 6 horas 6 horas ==> 2000ml por pessoa

//Refrigerante/agua ==> 1000ml por pessoa |  se durar mais 6 horas 6 horas ==> 1500ml por pessoa

//Crianças valem por 0,5 pessoa

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");


function Calcular() {


    let numeroAdultos = inputAdultos.value;
    let numeroCriancas = inputCriancas.value;
    let valorDuracao = inputDuracao.value;

    let quantidadeDeCarne = CarnePorPessoa(valorDuracao) * numeroAdultos + (CarnePorPessoa(valorDuracao) / 2 * numeroCriancas);

    let quantidadeDeCerveja = CervejaPorPessoa(valorDuracao) * numeroAdultos;

    let quantidadeDeBebidas = BebidasPorPessoa(valorDuracao) * numeroAdultos + (BebidasPorPessoa(valorDuracao) / 2 * numeroCriancas);

    console.log(quantidadeDeBebidas)

    resultado.innerHTML = `<br>`
    resultado.innerHTML += `<p>${quantidadeDeCarne / 1000} Kg de Carne </p>`
    resultado.innerHTML += `<br>` 
    resultado.innerHTML += `<p>${Math.ceil(quantidadeDeCerveja / 355)} Latas de Cerveja </p>`
    resultado.innerHTML += `<br>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeDeBebidas / 2000)} Garrafas de Bebidas </p>`

}

function CarnePorPessoa(duracao) {
    let carne = 400;

    if(duracao >= 6) {
        carne = 650;
    }

    return carne;
}

function CervejaPorPessoa(duracao) {
    let cerveja = 1200;

    if(duracao >= 6) {
        cerveja = 2000;
    }

    return cerveja;
}

function BebidasPorPessoa(duracao) {
    let cerveja = 1000;

    if(duracao >= 6) {
        cerveja = 1500;
    }

    return cerveja;
}