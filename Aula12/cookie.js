
let conta = document.querySelector("#conta")
let contador = 0;
let paragrafo = document.querySelector("#p")
conta.addEventListener("click", () => {
   
    contador++
    console.log(contador);
    if (contador % 50 === 0) {
        paragrafo.innerHTML = "Você clicou 50 vezes, senhorrr"
    }else {
        paragrafo.innerHTML = "Você consegue não desiste!"
    }


    document.getElementById("contar").innerText = contador

    
})