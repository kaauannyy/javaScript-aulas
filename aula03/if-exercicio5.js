let usuarioAltura = Number(prompt("Digite a sua altura em metros: "))

let usuarioPeso = Number(prompt("Digite o seu peso em quilogramas: "))

let imc = usuarioPeso/(usuarioAltura*2)

if (imc >= 18.5 && imc <= 24.9){
    alert("Você está saúdavel")
} else{
    alert("Você não está saúdavel")
}
alert(imc)


