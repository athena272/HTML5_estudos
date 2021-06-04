function CalcularMedia() {
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome: "Igor",
    notas: [9, 8],
    media: CalcularMedia
}

var aluno1 = {
    nome: "Valentina",
    notas: [10, 7],
    media: CalcularMedia
}

console.log(aluno.nome)
console.log(aluno.media())

console.log(aluno1.nome)
console.log(aluno1.media())