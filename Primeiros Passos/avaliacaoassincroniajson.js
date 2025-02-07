
console.log("Início da execução");
function carregarProduto(id) {
    return new Promise((resolve, reject) => {
        console.log("buscando dados no servidor");
        setTimeout(() => {
            // Simula a criação de um objeto produto após 2 segundos
            const produto = {id: 1, nome: "Notebook", preco: 3499};
            if(id !== produto.id) {
                reject("Produto nao encontrado");
            }else
            resolve(produto); // Resolve a Promise com o objeto produto
        }, 2000); // Atraso de 2 segundos
    });
}

carregarProduto(1)
    .then(produto => {
        try {
            // Converte o objeto produto para JSON
            const produtoJSON = JSON.stringify(produto);
            console.log("Produto em formato JSON:", produtoJSON);

            // Reverte o JSON para objeto
            const produtoObjeto = JSON.parse(produtoJSON);
            console.log("Produto em formato objeto:", produtoObjeto);
        } catch (error) {
            console.error("Erro ao converter o produto:", error);
        }
    })
    .catch(error => {
        console.error("Erro ao carregar o produto:", error);
    });

    console.log("Fim da execução");