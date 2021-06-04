function Sortear() {
    
    
    // let numeroPessoas = 100;

    // let numeroSorteado = Math.round(Math.random() * numeroPessoas);

    let NomeDasPessoas = ["Guigo", "Joyce", "Esmeralda", "Rivaldo", "Igor"]

    let numeroPessoas = NomeDasPessoas.length

    let numeroSorteado = Math.floor(Math.random() * numeroPessoas)

    document.getElementById("display").innerHTML = NomeDasPessoas[numeroSorteado]

    

}