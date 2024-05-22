let numero = [1, 2, 3, 4, 5]

let par = numero.filter((numeroPar) => {
    
    return numeroPar % 2 == 0
})

console.log(par);