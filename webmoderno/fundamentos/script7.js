//cuidado com os pontos, porque pode representar outras coisas
console.log(Math.ceil(6.2))

//notação de ponto, construindo um objeto
const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1)

const obj2 = {}
obj2.nome = 'No gol, é?'
console.log(obj2)

const obj3 = {}
obj3.nome = 'GOOLLL!!!'
console.log(obj3)

function obj(nome) {
    this.nome = nome
}

//gerando um objeto com new
const obj4 = new obj('Ola mundo')
console.log(obj4)
