alert("Um pop up no navegador");
//alert("tanto no console ou no alert pode-se passar variáveis e substituir uma palavra, exemplo ", replace("exemplo1", "exemplo2"));

//array

var lista = ["maca","pera","laranja"];
console.log(lista);
console.log(lista[1]);

lista.push("uva");// adiciona no array mais um elemento
lista.pop();//retira  o item da lista
console.log(lista.length);// com o length  consigo saber o tanto de itens que possui minha lista
console.log(lista.reverse());// traz os elementos de trás para frente
console.log(lista.toString());// converte os elementos para string
console.log(lista.join(" . "));// transforma no elemento desejável, como por exemplo da virgula para o ponto

//dicionario

var umNome = {nome:"Adilson", Sobrenome:"Freitas", ultimo_nome:"junior"};
console.log(umNome.ultimo_nome);

//lista de dicionario
var umNomes = [{nome:"Adilson", Sobrenome:"Freitas", ultimo_nome:"junior"},{nome:"lau", Sobrenome:"mar", ultimo_nome:"san"}];
console.log(umNomes);


//estrutura de repetições
var count = 0;
while (count <= 5) {
   console.log(count);
   count++;
}

for (let index = 0; index <= 10; index++) {
    console.log(index);   
}

//date, pode se utilizar o .get para ver mais opções
var d = new Date();
alert(d)

setReplace();// usado para trocar palavras
onclick="exemplo()"; // quando clicado pode fazer uma ação se declarado no js
document.getElementById("exemplo");// pega o elemento pelo id
innerHTML = "obrigado";// insere html no elemento selecionado.
window.open("uma url");// redireciona quando declarado no js
window.location.href = "uma url";// quando clicado em uma localização, sera redirecionado na mesma janela
onmouseover="exemplo()";// quando declarado no js, passando o mouse em cima, reflete em troca no texto
onmouseout="exemplo";
this()// passando eu mesmo o elemento, no js como elemento e html como this
onchange();// quando declarado no js, pode-se ver os valores da mudança e utilizar para algo 