let idade = prompt('qual ');
let isEnsinoMedio = confirm('Terminou o ensino medio');
let isCursandoOutraFaculdade = confirm('Terminou o a faculdade');

if (idade >= 18) {
  console.log("Voce e maior de idade");
} else {
  console.log("voce e menor de idade");
}

if (isEnsinoMedio) {
  console.log("Voce terminou o ensino medio");
} else {
  console.log("voce nao terminor o ensino medio");
}

if (isCursandoOutraFaculdade) {
        console.log("Voce esta cursando uma faculdade");
      } else {
        console.log("Voce nao esta cursando uma faculdade");
      }

