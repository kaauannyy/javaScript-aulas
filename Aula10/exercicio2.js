let jogos = [
    "Hogwarts Legacy" ,
     "Starfield" ,
    "Lost Ark",
    "Dota 2",
    "Apex Legends",
]

jogos.forEach(
    (valor, index, array) => {
        console.log(`Nome do jogo: ${valor}`);
        console.log(`A posição do jogo é: ${index}`);
        console.log(`Os jogos disponíveis são: ${array}`);
        console.log("---------------------------------------------------------------------------------------");
    }
)