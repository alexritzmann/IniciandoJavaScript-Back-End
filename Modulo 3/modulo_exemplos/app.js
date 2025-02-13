var pessoa = require("./commons/Pessoa");

nome = pessoa();

console.log(JSON.stringify(nome));

// Para executar o código, é necessário entrar na pasta onde está o app.js

var soma = require("./commons/Soma");

console.log(soma(5, 7));


var imposto = require("./commons/CalculoImposto");

console.log("Valor do produto com imposto: " + imposto.adicionar(10));
console.log("Valor do imposto: " + imposto.valor(10));
console.log("Taxa do imposto: " + imposto.taxa);


var calculadora = require("./commons/Calculadora");

console.log("Soma: " + calculadora.soma(5, 7)); 
console.log("Subtracao: " + calculadora.subtracao(5, 7)); 
console.log("Multiplicacao: " + calculadora.multiplicacao(5, 7)); 
console.log("Divisao: " + calculadora.divisao(5, 7));
