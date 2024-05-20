let nu1 = 0
let nu2 = 1
let nu3, cont = 0
let user = Number(prompt("Escolhe uma sequência de números: "))
// 0 1 1 2 3 5

while ( cont < user ) {
    alert(nu1);
    nu3 = nu1 + nu2
    nu1 = nu2
    nu2 = nu3
    cont++
    
}

