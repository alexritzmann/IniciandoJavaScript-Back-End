class produto
{
    constructor(nome, preco)
    {
        this.nome = nome;
        this.preco = preco;
    }
    mostrarDetalhes()
    {
        console.log(`Nome: ${this.nome} | Preço: ${this.preco}`);
    }
}

class eletronico extends produto
{
    constructor(nome, preco, garantia)
    {
        super(nome, preco);
        this.garantia = garantia;
    }
    mostrarDetalhes()
    {
        console.log(`Nome: ${this.nome} | Preço: ${this.preco} | Garantia: ${this.garantia}`);
    }
}

const produto0 = new eletronico("Notebook", 3000, "1 ano");
const produto1 = new produto("Mesa", 200);
const produto2 = new produto("Cadeira", 300);        
const produto3 = new produto("Suporte", 100);

produto0.mostrarDetalhes();
produto1.mostrarDetalhes();
produto2.mostrarDetalhes();

