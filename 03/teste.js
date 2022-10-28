// const microondas = (tempo) => {
//     let numero = 1;

//     console.log("inicio");

//     const contador = () => {
//         console.log(numero);
//         numero++;

//         if (numero > tempo / 1000) {
//             console.log("finalizou!");
//             clearInterval(id);
//         }
//     }
//     const id = setInterval(contador, 1000)
// }

// microondas(5000)

const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];

let nome = "";
for (let i = 0; i < jogadores.length; i++) {
    nome = jogadores[i];
    console.log(nome);
}

console.log(nome);