// function CriarAluno(nome, n1, n2) {
//     return {
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: function CalcularMedia() {
//             return (this.nota1 + this.nota2) / 2;    
//         }
//     }
// }

function aluno(nome, n1, n2) {
    
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.CalcularMedia = function CalcularMedia() {
        return ((this.nota1 + this.nota2) / 2);
    }

}

// var turma = [
//     CriarAluno("Igor", 9, 6),
//     CriarAluno("João", 7, 4),
//     CriarAluno("Marcela", 10, 10)
        
// ]

// var aluno = turma[1];



// turma.forEach(function (elemento) {

//     console.log(elemento);

// }   )
