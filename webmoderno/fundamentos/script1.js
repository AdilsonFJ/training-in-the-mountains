//const escola = "Cod3r";

// declarado a escola, usei charAt para pegar a posição 4.
//console.log(escola.charAt(4));

// tabela ask charCodeAt
//console.log(escola.charCodeAt(3));

//busca por um o item passado entre parentes e retorna em numero sequencia.
//console.log(escola.indexOf('d'));

//substring, quando passado o valor, sera trazido do valor para frente ou selecionado.
//console.log(escola.substring(1));

// usando o concat para concatenar
//console.log('Escola '.concat(escola).concat("!"));
//console.log("Escola " + escola + "!");

// usando replace para substituir palavra já existente!
//console.log(escola.replace(3, 'e'));

//convertendo string para array
//console.log('Ana,Maria,Pedro' .split(','));

// template strings
const nome = 'Laurentina';
//const concatenacao = 'Ola ' + nome + '!';
const template = `Ola ${nome}! `;

//console.log(template);

//passando para letra maiúscula com arrow function e concatenando
const up = texto => texto.toUpperCase();
//a logica esta em passar no dolar o up com aspas simples o texto.
console.log(`Ei.. ${up('cuidado')}!`);