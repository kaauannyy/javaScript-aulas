animaisCategoria = "a1"
// A1- Vertebrados
// A2 - Invertebrados
// A3 - Onívoros
// A4 - Ovíparos
// A5 -  Herbívoros


switch (animaisCategoria.toUpperCase()) {
    case "A1":
        console.log("O animal é: Vertebrados");
        break;
    case "A2":
        console.log("O animal é: Invertebrados");
        break;
    case "A3":
        console.log("O animal é: Onívoros ");
        break;
    case "A4":
        console.log("O animal é: Ovíparos");
        break;
    case "A5":
        console.log("O animal é: Herbívoros");
        break;
    
    default:
        console.log("Categoria de animal não encontrada");
        break;
}