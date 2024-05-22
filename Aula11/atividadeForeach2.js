let estudante = [
    {
    nome:"John",
    idade: 20
},

{
    nome: "Jane",
    idade: 25
},
{
    nome: "Mark",
    idade: 22
},
]

estudante.forEach((estudante) => {
    console.log(`Esse é o nome cadastrado: ${estudante.nome}`);
    console.log(`Esse é a idade cadastrada: ${estudante.idade}`);
})