// function MudarCor() {

//     // let h = document.getElementsByTagName("h1")[0]

//     // h.style.color = "purple"

// }

// function MudarTexto() {
 
//     // let h = document.getElementsByTagName("h1")[0]

//     // h.innerHTML = "Novo Título"

//     //Add Delay
//     // window.setTimeout(MudarCor, 1500)


//     window.setInterval(AtualizarTexto, 1500)
// }

var numero = 0

var intervalo

function AtualizarTexto() {
    let h = document.getElementsByTagName("h1")[0]

    h.innerHTML += " " + numero
    numero++
}


function Iniciar() {

    intervalo = window.setInterval(AtualizarTexto, 1500)

}

function Parar() {

    clearInterval(intervalo)

}