

//setTimeOut executa uma funcao uma vez depois de um certo tempo
//setInterval executa uma funcao repetidamente a cada certo intervalo de tempo

/*

function alerta()
{
    console.log("Alerta");
}

//tempo em milisegundos
setTimeout(alerta,300);

setInterval(alerta,200);

*/


console.log("Início da execução");

function buscaDadosdoServidor()
{
    //código para buscar dados no servidor
    return new Promise((resolve, reject) =>{
        console.log("buscando dados no servidor");
        setTimeout(() => {
            let sucesso = Math.random() > 0.5;
            if(sucesso)
            {   
                resolve("Sucesso");
            }
            else
            {   
                reject("Erro");
            }
        }, 2000);
    })    
}

buscaDadosdoServidor().
    then((mensagem) => {
        console.log(mensagem);
    })
    .catch((erro) => {
        console.error(erro);
  });



// outra fora de chamar a função assíncrona abaixo


/*
//daqui...
const minhaFuncaoAssincrona = async () => {
    try{
        const resultado = await buscaDadosdoServidor();
        console.log(resultado);
    }    
    catch(erro){
        console.error(erro);
    }
}
minhaFuncaoAssincrona();
//...até aqui.
*/


console.log("Fim da execução");


