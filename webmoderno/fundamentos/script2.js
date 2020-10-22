// criando um Array
const valores = [7.0, 8.8, 9.9, 5.5];
console.log(valores);
// mostrando valores de dentro.
console.log(valores[0], valores[3])
// inserindo valores dentro da array
valores[4] = 10;
console.log(valores)
// numero de elementos com length.
console.log(valores.length)
// inserindo com push
valores.push({id: 3}, null, false, "teste");
console.log(valores)
// tirando o ultimo valor do array com comando pop()
console.log(valores.pop());
console.log(valores)
//deletando valores
delete valores[0]
console.log(valores);


