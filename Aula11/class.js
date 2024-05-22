class Celular {
    constructor ( marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

    }
    desbloquearCelular(){
        return "Celular desbloqueado"
    }
    efetuarLigacao(){
        return "Ligando..."
    }
    matematica(n1, n2){
        return n1 + n2
    }
}

let Kauanny  = new Celular("Samsung", "M32", 2021)
console.log(typeof Kauanny);
console.log(Kauanny.desbloquearCelular());
console.log("----------");

let Emerson = new Celular("Xiaomi", "A11", 2018)
console.log(Emerson.matematica(1,2));
console.log("----------");

let Mariana = new Celular("Apple", "Iphone-11", 2019)
console.log(Mariana.efetuarLigacao()); 

class CelularGamer extends Celular{
    constructor(marca, modelo, ano, ram, cooler){
        super(marca, modelo, ano);
        this.ram = ram;
        this.cooler = cooler;
    }
    ligarGameBooster(){
        console.log("Otimizar o jogo.");
    }
}

let celularGamer1 = new CelularGamer("RedMagic", "9PRO", 2024, 32, false)
