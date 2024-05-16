// função void, uma função vazia nao consigo manipular ela, funciona sozinha.

function Mensagem(){
    console.log("Olá, Mundo!:)");
}
Mensagem()

// função que nao e vazia, consigo manipular.
function Mensagem2(){
    let msg = "kauanny"
    return msg
}

console.log(Mensagem2().toUpperCase());