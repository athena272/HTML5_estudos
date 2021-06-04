function h1click() {
    alert("Executando função");
}

function ChangeH1(i) {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerText = i.value;
}