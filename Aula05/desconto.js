// Aplicando desconto em produtos



let usuario = prompt("Informe um código promocional: ")
let produtoOriginal = 2000
let desconto = 0;
let produtoFinal = 0;
// "DESC1 - 05% de desconto"
// "DESC2 - 10% de desconto"
// "DESC3 - 15% de desconto"
// "DESC4 - 20% de desconto"
// "DESC5 - 25% de desconto”

switch (usuario.toUpperCase()) {
    case "DESC1":
        desconto = produtoOriginal*0.05;
        produtoFinal = produtoOriginal-desconto;
        alert("5% de desconto");
        alert(`O valor original do produto é: R$${produtoOriginal}`);
        alert(`O valor com desconto fica: R$${produtoFinal}`);
        break;
    case "DESC2":
        desconto = produtoOriginal*0.1;
        produtoFinal = produtoOriginal-desconto;
        alert("10% de desconto");
        alert(`O valor original do produto é: R$${produtoOriginal}`);
        alert(`O valor com desconto fica: R$${produtoFinal}`);
        break;
    case "DESC3":
        desconto = produtoOriginal*0.15;
        produtoFinal = produtoOriginal-desconto;
        alert("15% de desconto");
        alert(`O valor original do produto é: R$${produtoOriginal}`);
        alert(`O valor com desconto fica: R$${produtoFinal}`);
        break;
    case "DESC4":
        desconto = produtoOriginal*0.2;
        produtoFinal = produtoOriginal-desconto;
        alert("20% de desconto");
        alert(`O valor original do produto é: R$${produtoOriginal}`);
        alert(`O valor com desconto fica: R$${produtoFinal}`);
        break;
    case "DESC5":
        desconto = produtoOriginal*0.25;
        produtoFinal = produtoOriginal-desconto;
        alert("25% de desconto");
        alert(`O valor original do produto é: R$${produtoOriginal}`);
        alert(`O valor com desconto fica: R$${produtoFinal}`);
        break;

    default:
        alert("Erro");
        break;
}