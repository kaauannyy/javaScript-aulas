const calcularMedia = () => {
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let media = (n1 + n2)/2

    let oi = document.getElementById("oi")
    oi.style.fontWeight = "bold"
    if (media<6) {
        oi.style.color = "red"
    } else{
       oi.style.color = "blue"
    }
    
    
    oi.innerText = media

    
}

let calcular = document.querySelector("#botaoEnviar")
calcular.addEventListener('click', calcularMedia)















