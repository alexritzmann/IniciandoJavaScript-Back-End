let num1 = 3;
let num2 = 4;


function aoQuadrado(num)
{
    return num * num;
}

function divisaoPorDois(num)
{
    return num / 2;
}   


console.log(aoQuadrado(num1));
console.log(aoQuadrado(num2));

console.log(divisaoPorDois(aoQuadrado(num1))); //(3*3)/2
console.log(aoQuadrado(divisaoPorDois(num1))); //(3/2)*(3/2)

function aoQuadrado2(num)
{
    console.log(num * num);
}
aoQuadrado2(num2);

function saudacao(nome, titulo)
{
    console.log(`Seja bem-vindo, ${titulo} ${nome}`);
}

saudacao("Alex", "Mister");

// ARROW FUNCTION

const aoQuadrado3 = num => num * num;

console.log(aoQuadrado3(num1));

//codigo da saudacao utilizando conceito de função orientada a objeto

console.log("Utilizando conceito de função orientada a objeto");
const pessoa = {
    nome: "Alex",
    titulo: "Mister",
    saudacao: function()
    {
        console.log(`Seja bem-vindo, ${this.titulo} ${this.nome}`);
    }
}

pessoa.saudacao();
console.log(pessoa.nome);

console.log("Utilizando conceito de função orientada a objeto usando ARROW FUNCTION");


const pessoa2 = 
{
    nome: "Giih",
    titulo: "Miss",
    saudacao: function()
    {
        console.log(`Seja bem-vindo, ${this.titulo} ${this.nome}`);
    },
    saudacaoArrow: () => 
    { /*vai dar erro de undefined pq a arrow function nao tem this. Ela é um objeto e precisa ter suas próprias propriedades*/ 
        console.log(`Seja bem-vindo, ${this.titulo} ${this.nome}`);
    }
}

pessoa2.saudacao();
pessoa2.saudacaoArrow();