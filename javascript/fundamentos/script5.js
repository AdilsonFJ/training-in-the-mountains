//looping começando com var(3 parâmetros)

/* i"index", declaro uma variável igual a 0(limite), o i declarado passa no segundo parâmetro como < 10, no terceiro parâmetro passa incrementando o i com ++ */
for (var i = 0; i < 10; i++){
    //console.log(i)
} 

//looping começando com let(3 parâmetros)...que possui a diferença de ser executado somente no bloco(escopo)
for (let i = 0; i < 10; i++){
    //console.log(i)
}

//problema histórico do js com var 
const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function () {
        console.log(i)
    })
}

funcs[8]()

//a diferença usando let

const funcs1 = []

for (let i = 0; i < 10; i++){
    funcs1.push(function (){
        console.log(i)
    })
}

funcs1[8]()