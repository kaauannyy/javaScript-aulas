function imc(){
    let usuarioAltura = Number(document.getElementById("peso").value)
    let usuarioPeso = Number(document.getElementById("altura").value)
    let imc1 = usuarioPeso/(usuarioAltura*usuarioAltura)
    
    let oi = document.getElementById("oi")
    if (imc1 < 16.9){
        oi.innerText = "Você está muito abaixo do peso!"
    } else if ( imc1 <18.4){
         oi.innerText = "Você está abaixo do peso!"
    }
     else if( imc1 < 24.9 ){
         oi.innerText = "Você está no peso normal!"
     }
     else if( imc1 < 29.9){
         oi.innerText = "Você está acima do peso!"
     }
     else if(imc1 < 34.9){
         oi.innerText = "Você está com obesidade grau I!"
     }
     else if(imc1 < 40){
         oi.innerText = "Você está com obesidade grau II!"
     }
     else {
         oi.innerText = "Você está com obesidade garu III!"
     }
   
}
