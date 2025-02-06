

// null não teve valor definido (valor válido)
// undefined não teve valor definido (normalmente é um erro)

/*

variavelTeste = "teste"

variavelTeste.length // 
variavelTeste.charAt // 
variavelTeste.indexOf // 
variavelTeste.trim // 
variavelTeste.replace // 
variavelTeste.slice // 
variavelTeste.split // 
variavelTeste.toUppercase // 
variavelTeste.toLowercase // 

*/

const nomeAluno = "MARIA"
let idadeAluno = 11
let turma;

if(idadeAluno >=8 && idadeAluno <=10)
{
    turma = "menor"
}else if(idadeAluno >=11 && idadeAluno <=13){
    turma = "meio"
}else if (idadeAluno >=14 && idadeAluno <=16){
    turma ="maior"
}



switch(turma)
{
    case "menor":
        console.log(`O aluno ${nomeAluno} esta na turma menor`);
        break;
    case "meio":
        console.log(`O aluno ${nomeAluno} esta na turma do meio`);
        break;
    case "maior":
        console.log(`O aluno ${nomeAluno} esta na turma maior`);
        break;
    default:
        console.log("Pocure a secretaria");
}



// arrays


const array = [11,2,1,3,4,51];
const array2 = [[11,12],[13,14],[15,16]];

//sort é ordenação alfa numérica
console.log(array.sort());

//ordenação numérica usando o sort
console.log(array.sort((a,b)=>a-b));

// adiciona item no fim da lista
array.push(7);
console.log(array);

// adicona item no inicio da lista
array.unshift(15);
console.log(array);

// remove o último elemento do vetor
array.pop();

// remove o primeiro elemento do vetor 
array.shift();

//FOR
for(let i=0; i < array.length; i++)
{
    array[i]=array[i]+1;
    console.log(array[i]);
}

console.log(array);

//FOR OF
for(let itemDaLista of array)
{
    itemDaLista=itemDaLista+1;
    console.log(itemDaLista);
}

//CONTINUE e BREAK
for(let itemDaLista of array)
{
    if(itemDaLista <3)
        continue;
    itemDaLista=itemDaLista+1;
    console.log(itemDaLista);
}


const bebidas= ["refrigerante", "agua", "suco"];

for(let imprimirBebidas of bebidas)
{
    console.log(imprimirBebidas);
}

const number = [2,4,8,16,32,64,128,256,512,1024,2048];
let soma = 0;
for (let i=0; i<number.length;i++)
{
    soma = soma + number[i];
}
console.log(soma);
let mediaSoma = soma / (number.length);

console.log(mediaSoma);

//lista de objetos
const ages = {ROBERT:23,CAMILA:21,ALFREDO:45,LUANA:12,DENILSON:68};

//FOR IN   ---- Fornce o valor ao indice do OBJETO e não ao valor;
for(let pessoa in ages)
{
    //ages[pessoa] vai retornar a idade
    if (ages[pessoa] % 2 === 1) 
        console.log(pessoa);
}



/*
soma das notas
media das notas maior que 7 aprovado
media do aluno foi
*/

const notas = {B1:7.0,B2:3.7,B3:6.4,B4:8.6};
let mediaAluno =0;
for(let mediaNotas in notas)
{
    mediaAluno = mediaAluno + notas[mediaNotas];
    console.log(mediaAluno);
}
mediaAluno = mediaAluno / Object.keys(notas).length;

console.log(mediaAluno);

if(mediaAluno>=7)
{
    console.log(`Aluno aprovado com nota ${mediaAluno}`)
}else
{
    console.log(`Aluno reprovado com nota ${mediaAluno}`)
}





let count = 1;

while(count <5)
{
    console.log(`Count eh ${count}`);
    count++;
}

count = 1;

do
{
    console.log(`Count eh ${count}`);
    count++;
}while(count <5)


