console.log("Olá mundo!");

//aula 2
/*
COMANDOS INSTALADOS NO TERMINAL
abrir terminal ctrl + Apostrofe
npm init
npm install bootstrap
*/

//---- AULA 4 ----

/*
USANDO FRAMEWORK EXPRESS

request = requisição - pedido para o servidor
response = resposta do servidor
post = envio de dados para o servidor
get = busca de dados no servidor    

depois de inicializar o npm na pasta escolhida,
é necessário iniciar o npm
-> npm init

feito isso, no package.json, adicionar a seguinte linha de código:
(em baixo do main)
-> "type": "module", -> primeiro informado isso, mas depois durante o video, observei que estava a linha de baixo.
-> "type": "commonjs", -> ler linha de cima
Obs: type module não rodou servidor.

agora, é necessário instalar o express utilizando o npm
-> npm i express

seguindo depois para instalar do typescript
-> npm i -D typescript

Agora é necessário gerar o arquivo tsconfig.json
-> npx tsc --init

dentro do tsconfig.json gerado, precisamos alterar algumas linhas:
-> "target": "es6",
-> "moduleResolution": "node" (aqui é importante tirar o comentário)

instalar o types do express pra evitar problema de tipagem de dados
-> npm i -D @types/express

para finalizar, podemos criar o servidor com express
na raiz do projeto criar o arquivo app.ts

no arquivo package.json, adicionar a seguinte linha junto com os scripts:
"start": "npx ts-node-dev app.ts"

no arquivo app.ts, criar a seguinte linha:

import express from "express";

const app = express();

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
});


feito, agora podemos rodar o servidor com o comando no terminal:
->npm start

*/



/*
----- AULA 5 -----








*/


