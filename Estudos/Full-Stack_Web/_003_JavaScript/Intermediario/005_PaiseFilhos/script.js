window.onload = function () {
    
    let h1s = document.getElementsByTagName("h1");

    for (const h of h1s ) {
        console.log(h)

        h.addEventListener("click", QualOPai)
    }

    function QualOPai(evento) {
        
        let t = evento.target
        console.log(t.parentElement)

    }

}