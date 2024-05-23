let contador = 0;

function oi() {
    if (contador % 50 === 0) {
        alert("Você clicou 50 vezes, senhorrr")
    }

    document.getElementById("contar").innerText = contador

    contador++
    console.log(contador);
}