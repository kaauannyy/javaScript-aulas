function imc(){
    let usuarioAltura = Number(prompt("Digite a sua altura em metros: "))
    let usuarioPeso = Number(prompt("Digite o seu peso em kg: "))
    let imc1 = usuarioPeso/(usuarioAltura*2)

    if (imc1 < 16.9){
        alert("Você está muito abaixo do peso")
    } else if (imc1 < 17 && imc1 <18.4){
        alert("Você está abaixo do peso")
    }
     else if(imc1 <18.5 && imc1 < 24.9 ){
        alert("Você está no peso normal")
     }
     else if(imc1 < 25 && imc1 < 29.9){
        alert("Você está acima do peso.")
     }
     else if(imc1 < 30 && imc1 < 34.9){
        alert("Você está com obesidade grau I")
     }
     else if(imc1 < 35 && imc1 < 40){
        alert("Você está com obesidade grau II")
     }
     else {
        alert("Você está com obesidade garu III")
     }
    
     return imc
}
imc()