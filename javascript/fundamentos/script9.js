//destruturing em objeto, dados setados

const pessoa = {
    nome: 'Ana',
    idade: 28,
    endereco: {
        logradouro:'Rua ABC'
    }
}

const {nome} = pessoa 
//console.log(nome)

const {idade} = pessoa
//console.log(idade)

const {endereco: {logradouro}} = pessoa
//console.log(logradouro)

// tipo array, mas não tão boa pratica

const [a] = [10]
//console.log(a)

// alguns valores undefined
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
//console.log(n1, n3, n5, n6)

const [,[,nota]] = [[, 8, 8], [9, 6, 8]]
//console.log(nota)

//passando destruturing para a função, atenção no {} porque pode gerar undefined

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//console.log(rand({min: 600}))

// usando uma função com destruturing em array
// convertendo se for maior 
function rand1([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor1 = Math.random() * (max - min) + min
    return Math.floor(valor1)
}

console.log(rand1([]))