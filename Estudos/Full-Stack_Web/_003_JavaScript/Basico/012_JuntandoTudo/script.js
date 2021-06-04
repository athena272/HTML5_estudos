// Nome do Aluno - nota 1 - nota 2 - media - Aprovado/Reprovado

var nomes = ["Igor", "José", "Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

function CalcularMedia(nota1, nota2) {
    return ((nota1 + nota2) / 2);
}

function SituacaoEscolar(Media) {
    return ((Media >= 7) ? "Aprovado" : "Reprovado");
}

for (var i in nomes) {
    //calcular media da iteracao
    var MediaAtual = CalcularMedia(notasA[i], notasB[i]);
    //Decidir Aprovado/Reprovado
    var Passou = SituacaoEscolar(MediaAtual);
    //Imprimir a tabela
    console.log("Nome: " + nomes[i] + " - 1ª nota: " + 
                //Imprimir Primeira nota
                notasA[i] + " - 2ª nota:" +
                //Imprimir segunda nota
                notasB[i] + " - Média: " +
                //Imprimir Media
                MediaAtual + " - Situação: " +
                //Imprimir se passou
                Passou);
}

