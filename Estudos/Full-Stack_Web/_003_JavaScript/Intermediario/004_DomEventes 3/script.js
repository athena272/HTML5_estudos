function EndLoad() {
    
    let t = document.getElementById("titulo");

    // t.onclick = mudarTexto;

    t.addEventListener("mouseover", mudarTexto);
    t.addEventListener("mouseout", mouseFora);

}
 
function mudarTexto() {
    
    this.innerHTML = "Hoya, World!!!";

}

function mouseFora() {
    this.innerHTML = "Mouse Fora";
    
}

