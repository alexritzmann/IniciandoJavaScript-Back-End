const produtos = [
    {id: 1, nome: 'Notebook', preco: 2499, fragil: true},
    {id: 2, nome: 'iPad Pro', preco: 4199, fragil: true},
    {id: 3, nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {id: 4, nome: 'Copo de plastico', preco: 18.99, fragil: false}
];

// transformar variavel de lista em json

const produtosJson = JSON.stringify(produtos);
console.log(produtos);
console.log(produtosJson);  // transforma em string

// transformar json em variavel de lista

const produtosObj = JSON.parse(produtosJson);
console.log(produtosObj);

