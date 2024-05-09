// Jogo Adivinhação

let usuario1 = parseInt(prompt("Digite um número de 0 a 10: "));

let numero = 8;

while (usuario1 != numero) {
    alert("Tente novamente");
    usuario1 = parseInt(prompt("Digite um número de 0 a 10: "));
    
}
alert("Parabéns, você acertou!");