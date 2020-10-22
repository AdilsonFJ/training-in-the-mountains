/*Existe 8 tipos de datas em js sendo as 8: undefined, null, boolean, string, symbol, bigint, number, e object. */

//variáveis não pode conter espaço e começar com um numero, porem aceita símbolos como $ e _

//Primeiro teste com var, armazenando na memoria
var myName;

//Segundo teste com var, fazendo atribuição na memoria armazenada
var a = 7;

//terceiro teste com var, atribuindo uma var, com outra var.
var a;
a = 7;
var b;
b = a;

//quarto teste em var, declarando var em uma linha apenas
var a = 9;

/*quinto teste com var, undefined e NaN. se por exemplo fazermos uma conta aritmética de undefined com operador, resultara em NAN, se concatenarmos também um undefined, o resultado sera undefined*/
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + "I am string";

//sexto caso em var, caso de sensibilidade camelCase
var camelCase;

