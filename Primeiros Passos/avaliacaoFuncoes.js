const num1 = 3;
const num2 = 4;

function soma()
{
    console.log("Função soma");
    console.log(num1+num2);
}
soma();

console.log("Função Arrow Function soma")
const soma2 = () => console.log(num1+num2);
soma2();


const lista = [1,2,3,4,5];

function somaLista()
{
    let total = 0;
    for(let i = 0; i < lista.length; i++)
    {
        total += lista[i];
    }
    console.log(total);
}
console.log("Função somaLista");
somaLista();

console.log("Função Arrow Function somaLista");
const somaLista2 = () => console.log(lista.reduce((a,b) => a+b));
somaLista2();