//funções
//sem retorno, então chamar a função fora da função e dentro o console

function somaNow(a, b, c) {

    //console.log(a + b - c);
}
//somaNow(2, 3, 10);

//função de retorno, chamar com console passando a função entre ()
function soma(a, b) {
    return a + b;
  
}
//console.log(soma(10, 15))

  
/* um treinamento
function teste(a, b) {
    if (a > b) {
        return 'É maior'
    }else{
        return 'É menor'
    }
}  
console.log(teste(10, 9))
*/

//armazenamento de funções em variáveis e constantes 
const somaJa = function (a, b) {
    return a + b
}
//console.log(somaJa(2, 3))

//tipo arrow
const testando = (a, b) => {
    return a + b
}
//console.log(testando(18, 50))

// função tipo implícita de uma única linha 
const vezes = (a, b) => a * b
console.log(vezes(10, 2))
