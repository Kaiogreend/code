let valorTerrenoAtual = 60000;
let valorTerrenoAseVender=90000;
let meses= 24;

let taxaDeJuros = Math.pow(valorTerrenoAtual/valorTerrenoAseVender,1/meses) - 1;

console.log( (taxaDeJuros*100).toFixed(4));
