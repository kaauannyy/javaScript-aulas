let alunos = [
    {
        Nome: "Kauanny",
        RA_RM: 22066,
        Matriculado: true
    },

    {
        Nome: "Emerson",
        RA_RM: 22022,
        Matriculado: false
    },

    {
        Nome: "Kimberly",
        RA_RM: 11046,
        Matriculado: true
    },

]
// console.log(alunos[1].Nome);
let nomeAlunos = alunos.map((name) => {
    return name.Nome
})

let RA_Alunos = alunos.map((n1) => {
    return n1.RA_RM
})

let nomeMaior = nomeAlunos.map(
    (nomes) => {
        return nomes.toUpperCase()
    }
)

console.log(nomeAlunos);
console.log(RA_Alunos);
console.log(nomeMaior);