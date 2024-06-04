let Elementoh1 = document.getElementsByTagName("h1")[0] // -- o numero da posição do Elemento, igual o array.

Elementoh1.style.color = "blue"

let textodop = document.getElementsByTagName("p")[1]

textodop.innerText = "Não sou mais o parágrafo"

textodop = document.querySelector("#p1")

textodop.innerHTML = "Aula de DOM3"

let p3 = document.querySelectorAll(".p3")[0]
p3.innerHTML = "OIIIIIIIIIII"
p3.style.color = "green"