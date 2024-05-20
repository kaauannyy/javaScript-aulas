let email = [
    "email1@gmail.com", // 0
    "email2@gmail.com", // 1
    "email3@gmail.com", // 2
    "email4@gmail.com",//  3
]

// for (let cont = 0; cont < email.length; cont++){
//     console.log("Email enviado para: " + email[cont]);
// }

// Valor do Array
// Index = 0,1,2,3, são os valores so Array
// Array completo.



email.forEach( (email) => {
    console.log(`Email enviado para:${email}`);
}
)

console.log("-----------------------------------");

email.forEach(
    // indepedente do nome ele vai pela ordem, entao primeiro array e depois index e porfim array completo
    (email, elemento) => {
        console.log(`Email enviado para:${email}`);
        console.log(`você é o número: ${elemento} da lista.`);
    }
)