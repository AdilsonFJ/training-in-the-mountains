//pratica


const peso1 = 1.0;
//colocado Number para declarar que é do tipo number
const peso2 = Number(10);
//console.log(peso1, peso2);
/*
// descobrindo se o number é inteiro usando isInteger.
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));
*/


//exercício fazendo uma avaliação e retornando a media

const avaliacao1 = 9.5;
const avaliacao2 = 8.3;
//descobrir o total
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
//descobrindo a media
const media = total / (peso1 + peso2);

//usando o toFixed() é possível definir o numero de casa decimais.
//usando toString() é possível converter para string, em binário.
//console.log(media)


//Math(tipo objeto)

let raio = 5.6
let area = Math.PI * Math.pow(raio, 2);

console.log(area)